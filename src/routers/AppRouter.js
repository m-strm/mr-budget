import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpense from '../components/AddExprense'
import EditExpense from '../components/EditExpense'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import ExpenseDashboardPage from '../components/Home'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = () => (
<BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  )

  export default AppRouter;