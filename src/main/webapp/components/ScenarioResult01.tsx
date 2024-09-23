import * as React from 'react';
// import {format} from "sql-formatter";

import ReactionLogo from "app/components/common/ReactionLogo";

const sql = `시나리오 WIP`

function ScenarioResult01() {
  // const formattedSqlText = React.useMemo(() => {
  //   return format(sql, {language: 'postgresql'})
  // }, [])

  return (
    <React.Fragment>
      <article className='area-message'>
        <div>지난 10년간 우리 병원에서 신증후군 (nephrotic syndrome)으로 (처음) 진단받은 18세 이하의 환자를 연도별로 보여주세요.</div>
      </article>
      <article className='area-reaction'>
        <ReactionLogo/>
        <div className='box-reaction'>
          <p>요청하신 지난 10년간 신증후군 (nephrotic syndrome)으로 (처음) 진단받은 18세 이하의 환자수를 조회하는 쿼리는 다음과 같습니다.</p>
          <pre>{sql}</pre>

          <div>
            이대로 쿼리를 실행하여 DB에서 조회할까요?
          </div>

        </div>
      </article>

      <article className='area-message'>
        <div>네, 조회결과를 보여주세요</div>
      </article>

    </React.Fragment>
  );
}

export default ScenarioResult01;