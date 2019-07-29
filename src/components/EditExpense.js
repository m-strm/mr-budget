import React from 'react';

const EditExpense = () => (
    <div>
        Edit expense {props.match.params.id}
    </div>
);

export default EditExpense;