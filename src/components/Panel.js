const Panel = (props) => {
  return (
    <div className="panel">
      <div className="panelNums">{props.panelText}</div>
    </div>
  );
};

export default Panel;
