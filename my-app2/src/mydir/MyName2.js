/*
function MyName2(props) {
    console.log(props, ' ', props.name, ' ', props.addr);
    return (
        <>
            안녕! 별명은 <b>{props.name}</b> 이고, 주소는 <b>{props.addr}</b>
        </>
    );
}
*/

/* 예전 방법! Lambda */
const MyName2 = ({name, addr}) => {
    // let aa = name + "님";
    // console.log(aa);
    return(
        <>
            반가워! 별명은 <b>{name + "님"}</b> 이고, 주소는 <b>{addr}</b> 
        </>
    );
};

export default MyName2;