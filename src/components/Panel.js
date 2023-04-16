const Panel = (props) => {
  return (
    <div className="panel">
      <div className="panelNums">{props.panelText}</div>
      <div className="panelAns">{props.panelAns}&nbsp;</div>
    </div>
  );
};

export default Panel;
