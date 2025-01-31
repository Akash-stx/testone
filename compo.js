
import { useDispatch, useSelector } from 'react-redux';


const BasicAlerts = () => {
    const data = useSelector((state) => state);
    console.log(data, 'data')
    return null;
};

//very heavy computing function
function getmyname(name) {
    return name;
}


export { getmyname };
export default BasicAlerts;


