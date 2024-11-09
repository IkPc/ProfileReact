import Homepage from "../pages/homepage";

const withPermission = (Perm) => {
    return (props) => {
        if(!props.hasPermission){
            return <h1>Permissão negada</h1>
        }
        return <Perm {...props} />
    };
};
export default withPermission;