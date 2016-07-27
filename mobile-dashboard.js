var btnInvite = React.DOM.button({
  className: "btn btn-md btn-primary",
  children: "Invite"
});

var btnAddJob = React.DOM.button({
  className: "btn btn-md btn-success",
  children: "Add Job"
});

var btnAllJobs = React.DOM.button({
  className: "btn btn-md btn-info",
  children: "All Job"
});

var btnAllExpenses = React.DOM.button({
  className: "btn btn-md btn-info",
  children: "All Expenses"
});

var btnAllPayments = React.DOM.button({
  className: "btn btn-md btn-info",
  children: "All Payments"
});

var btnAddExpense = React.DOM.button({
  className: "btn btn-md btn-success",
  children: "Add Expense"
});

var InviteComponent = React.createClass({
  render: function() {
    var numOfTenants = 2;

    return (
      <div className="component">
        {btnInvite}
        <p>Current tenants: ({numOfTenants})</p>
      </div>
    );
  }
});

var ChoresComponent = React.createClass({
  render: function() {
    var currentChore = "Throw garbage out";

    return (
      <div className="component">
        <label>Upcoming chore:</label>
        <h3>{currentChore}</h3>
        {btnAddJob}
        {btnAllJobs}
      </div>
    );
  }
});

var BalancesComponent = React.createClass({
  render: function() {
    var balances = [
    {name: "John", amount: "owes you: $5.75"},
    {name: "Peter", amount: "owes you: $6.80"}
    ];

    return (
      <div className="component">
        <label>Balances:</label>
        <ul>
          { balances.map( user => <li key={user.name}>{user.name} {user.amount}</li> ) }
        </ul>
        {btnAllExpenses}
        {btnAddExpense}
        {btnAllPayments}
      </div>
    );
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <h1>rTab Dashboard</h1>
        <InviteComponent />
        <ChoresComponent />
        <BalancesComponent />
      </div>
    );
  }
});


ReactDOM.render(<Dashboard />, document.getElementById('mobile-dashboard'));