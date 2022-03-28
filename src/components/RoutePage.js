import {Link} from 'react-router-dom';

function RoutePage({path}) {
  const lengPath = path.length;
  const newPath = path.slice(0, lengPath-1);

  return (
    <div className='routerPage'>
      <section>
        <h3 className='routerPage__item'>
                {
                  newPath.map((p, index) => (
                    <li key={index}>
                      <Link to={p==='home'? '/' : p} key={index}>
                        <p className='routerPage__item__route'>{p}</p>
                      </Link>
                    </li>
                  ))
                }
              <p className='routerPage__item__name'>{path[lengPath-1]}</p>
          </h3>
      </section>
    </div>
  )
}

export default RoutePage;