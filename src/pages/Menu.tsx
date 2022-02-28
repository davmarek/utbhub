import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MenuList from '../components/MenuList';
import '../styles/Menu.scss';

function Menu() {
  const params = useParams();

  const faculty = useRef('');
  const [menu, setMenu] = useState([]);
  const [date, setDate] = useState(new Date(0));

  useEffect(() => {
    let canteenId: Number;

    switch (params?.faculty) {
      case 'u4':
        canteenId = 2;
        faculty.current = 'U4';
        break;
      default:
        canteenId = 3;
        faculty.current = 'U5';
    }

    console.log(`Faculty: ${faculty}`);
    console.log(`CanteenId: ${canteenId}`);

    fetch(
      `https://doctus.creativnivyvojari.cz/app/index.php?canteenId=${canteenId}`
    )
      .then((response) => response.json())
      .then((json) => {
        setMenu(json.groups);
        setDate(new Date(json.date));
        console.log(json.groups);
      })
      .catch((e) => console.log(e));
  }, []);

  if (date.getFullYear() >= new Date().getFullYear())
    return (
      <div>
        <h1 id="date">
          {date.toLocaleDateString('cs-CZ', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
          <div className="chip orange">{faculty.current.toUpperCase()}</div>
        </h1>

        {menu.length > 3 && (
          <div>
            <MenuList meals={menu[0]} />
            <MenuList meals={menu[1]} />
            <MenuList meals={menu[2]} />
            <MenuList meals={menu[3]} />
          </div>
        )}
      </div>
    );

  return <></>;
}

export default Menu;
