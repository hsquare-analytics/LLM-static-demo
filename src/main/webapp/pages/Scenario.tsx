import * as React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IconMessageCirclePlus, IconBrandTelegram, IconMenu2, IconUserCircle, IconSettings} from '@tabler/icons-react'
import ScenarioResult01 from "app/components/ScenarioResult01";
import ScenarioResult02 from "app/components/ScenarioResult02";


function Scenario() {
  const params = useParams()
  const navigate = useNavigate()
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
        <div className='area-title'>
          <IconMenu2 color='#222' onClick={() => navigate(-1)}/>
          <h1>LLM 타이틀</h1>
          <div className='box-config'>
            <IconUserCircle/>
            <IconSettings/>
          </div>

        </div>
      </section>
      <section className='section-result'>
        {renderResult}
      </section>
      <section className='section-scenario'>
        <div className='area-instruction'>
          <span>
            <IconMessageCirclePlus color='#222'/>
          </span>
          <div className='box-text-input'>
            <input type="text" placeholder='Ask me anything...'/>
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