export const Notification = ({ error }) => {
   
    return (
        <div className="error-msg">
            <i className="fa fa-times-circle"></i>
            {error}
        </div>
    )
}