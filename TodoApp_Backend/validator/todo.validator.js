export const todoValidator = (data) => {
    // console.log(data);
    const errors = [];

    if (!data.description || typeof data.description !== 'string' || data.description.length < 3) 
    errors.push({ field: 'description', message: 'Description must be a string and at least 3 characters long.' });
    


    if (!['Low', 'Medium', 'High'].includes(data.priority)) errors.push({ field: 'priority', message: 'Priority must be one of Low, Medium, or High.' });
    


    if (!['Pending', 'In Progress', 'Completed'].includes(data.status)) errors.push({ field: 'status', message: 'Status must be one of Pending, In Progress, or Completed.' });
    

    return errors.length > 0 ? { error: { details: errors } } : {}; 
};

export const updateTodoValidator = (data) => {
    const errors = [];


    if (data.description && (typeof data.description !== 'string' || data.description.length < 3)) 
        errors.push({ field: 'description', message: 'Description must be a string and at least 3 characters long.' });
    


    if (data.priority && !['Low', 'Medium', 'High'].includes(data.priority)) errors.push({ field: 'priority', message: 'Priority must be one of Low, Medium, or High.' });

    
    if (data.status && !['Pending', 'In Progress', 'Completed'].includes(data.status)) errors.push({ field: 'status', message: 'Status must be one of Pending, In Progress, or Completed.' });
 

    return errors.length > 0 ? { error: { details: errors } } : {}; 
};
