import './ExpenseItem.css';
function ExpenseItem(props){
    const clickHandler = ()=>{
        console.log('click!');
    };
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item_des'>
                <h2>{props.tittle}</h2>
                <div className='expense-item_price'>{props.amount}</div>
                <button onClick={clickHandler}>Delete expense</button>
            </div>
        </div>
    )
}

export default ExpenseItem;
