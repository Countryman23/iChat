import React, {useState} from 'react';
import ModCSS from "./user.module.css"; //Модифицируем наши стили с помощью .module
import cn from "classnames";

// рефакторим
// let Pagination = (props) => {
//     let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize); //3. количество страниц c пользователями
//         let pages = [];
//         //4 заполняем в pages // дописал / 100 что бы уменьшить количество отображаемых страниц
//         for (let i=1; i <= pagesCount; i++) {
//             pages.push(i);
//         }
//     return <div>
//          {pages.map(p => {
//                 return <span className={props.carrentPage === p && ModCSS.Selected}
//                             onClick={(e) => {props.onUserListChanged(p)}}>{p}</span>
//             })}
//     </div>
// }

// let Pagination = (props, portionSize = 10) // таким способом не работало

// !!!!не показываеттекущюю страницу!!!
let Pagination = ({totalUsersCount, pageSize, currentPage, onUserListChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil (totalUsersCount / pageSize); //3. количество страниц c пользователями
    
        let pages = [];
        //4 заполняем в pages
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let portionCount = Math.ceil(pagesCount / portionSize);
        let [portionNumber, setPortionNumber] = useState(1);
        let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
        let rightPortionPageNumber = portionNumber * portionSize;
    
    return <div className={ModCSS.paginator}>
    { portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
            return <span className={ cn({[ModCSS.selectedPage]: currentPage === p }, ModCSS.pageNumber) }
                         key={p}
                         onClick={(e) => {onUserListChanged(p);}}>{p}
                    </span>
        })}
    { portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
</div>
}

export default Pagination;
