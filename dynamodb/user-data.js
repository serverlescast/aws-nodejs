
module.exports = (table, props) => {

    return {
        TableName: 'CUSTOMER_LIST',
        Item: {
          'CUSTOMER_ID' : {N: '001'},
          'CUSTOMER_NAME' : {S: 'Richard Roe'}
        } 
    }
  };