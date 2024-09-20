import {useNavigate} from "react-router-dom";

function Entry() {
  const navigate = useNavigate()

  const handleNavigate = (id: string) => {
    navigate(`/${id}`)
  }

  return (
    <div className='wrap-guide'>
      <section>
        <h1>LLM 시나리오 페이지</h1>
        <article>
          <div>
            <span onClick={() => handleNavigate('1')}>시나리오 1</span>
          </div>
          <div>
            <span onClick={() => handleNavigate('2')}>시나리오 2</span>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Entry;