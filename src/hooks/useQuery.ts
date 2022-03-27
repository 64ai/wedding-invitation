import {parse} from 'query-string';

const useQuery = () => {
  return parse(window.location.search);
};

export default useQuery;
