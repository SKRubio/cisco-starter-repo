import './DataPoint.css';
function DataPoint({title, data}){
    return (<div>
        <h1>{title} {data}</h1>
    </div>
    );
}

export default DataPoint;