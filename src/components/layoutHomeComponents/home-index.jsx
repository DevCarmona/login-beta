import './stylesHome.css'

export const LayoutHomeComponents = (props) => {
  return (
    <div className="container">
      <div className="container-home">
        <div className="wrap-home">
            {props.children}
        </div>
      </div>
    </div>
  );
};