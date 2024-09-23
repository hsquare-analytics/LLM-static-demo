import * as React from 'react';
import {format} from "sql-formatter";
import {IconLoader2} from '@tabler/icons-react'

import ReactionLogo from "app/components/common/ReactionLogo";

type MonthlyData = {
  month: string;
  totalPatients: number;
}

type TableData = {
  [year: string]: MonthlyData[];
}

const sql = `WITH SurgeryPatients
                      AS (SELECT EXTRACT(YEAR FROM SRGR.OP_EXPT_DT) AS Year, EXTRACT (MONTH FROM SRGR.OP_EXPT_DT) AS Month, COUNT (*) AS PatientCount
             FROM
                 CDW.FT_CRE_SRGR AS SRGR
             WHERE
                 SRGR.MED_DEPT_CD = 'TS' -- assuming 'TS' is the code for Thoracic Surgery
               AND SRGR.AGE_CD_YY >= 18
               AND SRGR.OP_EXPT_DT >= (CURRENT_DATE - INTERVAL '3 years')
             GROUP BY
                 Year, Month
                 )
SELECT
    Year, Month, SUM (PatientCount) AS TotalPatients
FROM
    SurgeryPatients
GROUP BY
    Year, Month
ORDER BY
    Year, Month;`

const tableData: TableData = {
  '2024': [
    {month: '1월', totalPatients: 258},
    {month: '2월', totalPatients: 155},
    {month: '3월', totalPatients: 103},
    {month: '4월', totalPatients: 110},
    {month: '5월', totalPatients: 108},
    {month: '6월', totalPatients: 110},
    {month: '7월', totalPatients: 144},
    {month: '8월', totalPatients: 134},
    {month: '9월', totalPatients: 82}
  ],
  '2023': [
    {month: '1월', totalPatients: 243},
    {month: '2월', totalPatients: 232},
    {month: '3월', totalPatients: 282},
    {month: '4월', totalPatients: 259},
    {month: '5월', totalPatients: 239},
    {month: '6월', totalPatients: 254},
    {month: '7월', totalPatients: 236},
    {month: '8월', totalPatients: 247},
    {month: '9월', totalPatients: 218},
    {month: '10월', totalPatients: 187},
    {month: '11월', totalPatients: 210},
    {month: '12월', totalPatients: 221}
  ],
  '2022': [
    {month: '1월', totalPatients: 250},
    {month: '2월', totalPatients: 199},
    {month: '3월', totalPatients: 228},
    {month: '4월', totalPatients: 243},
    {month: '5월', totalPatients: 236},
    {month: '6월', totalPatients: 260},
    {month: '7월', totalPatients: 259},
    {month: '8월', totalPatients: 230},
    {month: '9월', totalPatients: 234},
    {month: '10월', totalPatients: 217},
    {month: '11월', totalPatients: 200},
    {month: '12월', totalPatients: 249}
  ],
  '2021': [
    {month: '9월', totalPatients: 77},
    {month: '10월', totalPatients: 212},
    {month: '11월', totalPatients: 244},
    {month: '12월', totalPatients: 282}
  ],
}

const columns = Object.keys(tableData).sort((a, b) => parseInt(b) - parseInt(a))

function ScenarioResult02() {
  const formattedSqlText = React.useMemo(() => {
    return format(sql, {language: 'postgresql'})
  }, [])

  return (
    <React.Fragment>
      <article className='area-message'>
        <div>지난 3년간 흉부외과에서 수술받은 18세 이상의 환자를 월별로 보여주세요.</div>
      </article>

      <article className='area-reaction'>
        <ReactionLogo/>
        <div className='box-reaction'>
          <p>요청하신 2022년 1형 당뇨로 진단받은 월별 환자수를 조회하는 쿼리는 다음과 같습니다.</p>

          <pre>
            {formattedSqlText}
          </pre>

          <div>
            이대로 쿼리를 실행하여 DB에서 조회할까요?
          </div>

        </div>
      </article>

      <article className='area-message'>
        <div>네, 조회결과를 보여주세요</div>
      </article>

      <article className='area-reaction'>
        <ReactionLogo/>
        <div className='box-reaction'>
          <p>데이터를 조회중입니다. 잠시만 기다려주세요.</p>
          <IconLoader2 color='#228be6'/>
        </div>
      </article>

      <article className='area-reaction'>
        <ReactionLogo/>
        <div className='box-reaction'>
          <table className='table'>
            <thead>
            <tr>
              {
                columns.map((item) => {
                  return (
                    <th key={item} colSpan={tableData[item].length}>{item}</th>
                  )
                })
              }
            </tr>
            <tr>
              {
                columns.map((item) => {
                  return (
                    tableData[item].map((data) => {
                      return (
                        <th key={data.month}>{data.month}</th>
                      )
                    })
                  )
                })
              }
            </tr>
            </thead>
            <tbody>
            <tr>
              {
                columns.map((item) => {
                  return (
                    tableData[item].map((data) => {
                      return (
                        <td key={data.month} className='number'>{data.totalPatients}</td>
                      )
                    })
                  )
                })
              }
            </tr>
            </tbody>
          </table>
        </div>
      </article>
    </React.Fragment>
  );
}

export default ScenarioResult02;