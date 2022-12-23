import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
   {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2022-12-22"),
   },
   {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-01-05"),
   },
   {
      id: "e3",
      description: "Some Bananas",
      amount: 5.99,
      date: new Date("2022-05-05"),
   },
   {
      id: "e4",
      description: "A book",
      amount: 18.59,
      date: new Date("2022-12-05"),
   },
   {
      id: "e5",
      description: "Another book",
      amount: 14.99,
      date: new Date("2022-12-06"),
   },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
   return (
      <View style={styles.container}>
         <ExpensesSummary
            expenses={DUMMY_EXPENSES}
            periodName={expensesPeriod}
         />
         <ExpensesList expenses={DUMMY_EXPENSES} />
      </View>
   );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.primary700,
   },
});
