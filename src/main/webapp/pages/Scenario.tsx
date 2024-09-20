import * as React from 'react';
import {useParams} from "react-router-dom";
import {IconPaperclip, IconBrandTelegram} from '@tabler/icons-react'
import ScenarioResult01 from "app/components/ScenarioResult01";
import ScenarioResult02 from "app/components/ScenarioResult02";


function Scenario() {
  const params = useParams()
  const {id} = params


  const renderResult = React.useMemo(() => {
    return {
      '1': <ScenarioResult01/>,
      '2': <ScenarioResult02/>,
    }[id as string]
  }, [])

  return (
    <main className='wrap-scenario'>
      <section className='section-title'>
        <h1>LLM 타이틀</h1>
      </section>
      {/*<section className='section-scenario'>*/}
      {/*  <div className='area-instruction'>*/}
      {/*    <span>*/}
      {/*      <IconPaperclip color='#222'/>*/}
      {/*    </span>*/}
      {/*    <div className='box-text-input'>*/}
      {/*      <input type="text" placeholder='메시지 입력'/>*/}
      {/*    </div>*/}
      {/*    <span className='box-send'>*/}
      {/*      <IconBrandTelegram color='#fff' size='20'/>*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className='section-result'>
        {renderResult}
      </section>
      <section className='section-scenario'>
        <div className='area-instruction'>
          <span>
            <IconPaperclip color='#222'/>
          </span>
          <div className='box-text-input'>
            <input type="text" placeholder='메시지 입력'/>
          </div>
          <span className='box-send'>
            <IconBrandTelegram color='#fff' size='20'/>
          </span>
        </div>
      </section>
    </main>
  );
}

export default Scenario;