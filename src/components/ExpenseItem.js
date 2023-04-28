import './ExpenceItem.css';
function ExpenseItem() {
    const expenceDate = new Date(2021, 2 , 28);
    const expenceTitle = 'Car Insurance';
    const expenceAmount = 294.67;

    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className='expense-item__description'>
                <h2>{expenceTitle}</h2>
                <div className='expense-item__price'>$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;