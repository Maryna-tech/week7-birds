function Birds ({parrot}){
    return (
    <div>
        {Parrot.map((element =>{
            const {id,image} = element;
            return<div key={id}>
                <p>{id}</p>
                <img src={image} alt ="birds" width="300px"/>;
            </div>
        }))}
    </div>)
}

export default Birds;
