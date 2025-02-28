

// function DrinkItem(item, type){
// function DrinkItem(props){
function DrinkItems({drinkItems}){
    return (

        <div style = { {'border':'1px solid black'} }>
            <p>이름 : {drinkItems.item}</p>
            <p>타입 : {drinkItems.type}</p>
        </div>

    );
}

export default DrinkItems;