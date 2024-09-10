
import { useEffect, useState} from "react";

export function useFetch(fetchFn, initialValue)              //hook은 암묵적으로 use를 이름 앞에 붙여 사용한다.
{               
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch user places.' });
          }

          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return{
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
}                        