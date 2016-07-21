var btnInvite = React.DOM.button({
  className: "btn btn-md btn-primary",
  children: "Invite"
});

var btnAddJob = React.DOM.button({
  className: "btn btn-md btn-success",
  children: "Add Job"
});

var btnAllJob = React.DOM.button({
  className: "btn btn-md btn-info",
  children: "All Job"
});

var btnAllExpenses = React.DOM.button({
  className: "btn btn-md btn-info",
  children: "All Expenses"
});

var btnAllPayments = React.DOM.button({
  className: "btn btn-md btn-info",
  children: "All Expenses"
});

var btnAddExpense = React.DOM.button({
  className: "btn btn-md btn-success",
  children: "Add Expense"
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <h1>rTab Dashboard</h1>
      </div>
    );
  }
});


ReactDOM.render(<Dashboard />, document.getElementById('mobile-dashboard'));