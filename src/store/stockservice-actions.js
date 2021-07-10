import {stockServiceActions} from './stockservice-slice';

export const fetchTicks = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        console.log('jwt'+localStorage.getItem("jwtToken"));
        const response = await fetch(
          'http://localhost:8080/api/ticks',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("jwtToken")
              }
          }
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch ticks!');
        }
  
        const data = await response.json();
        console.log(data);
  
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
            stockServiceActions.getTopTenTicks({
            ticks: cartData.finance || {}
            
          })
        );
      } catch (error) {
       //Need to modify state to show error
      }
    };
  };
  