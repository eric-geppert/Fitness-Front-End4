import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

var count = 0;
class MyPDFDocument extends Component {
  // const MyPDFDocument = props => {

  constructor(props) {
    super(props);

    // this.state = {
    //   isAuthenticated: false
    // };
  }

  rednerWorkout(param) {
    switch (param) {
      case '../images/workouts/ConditioningWeightLoss5V1.pdf':
        return require('../images/workouts/ConditioningWeightLoss5V1.pdf');
      case '../images/workouts/ConditioningWeightLoss4V1.pdf':
        return require('../images/workouts/ConditioningWeightLoss4V1.pdf');
      case '../images/workouts/ConditioningWeightLoss3V1.pdf':
        return require('../images/workouts/ConditioningWeightLoss3V1.pdf');
      case '../images/workouts/AtHomeTotalBody5V1.pdf':
        return require('../images/workouts/AtHomeTotalBody5V1.pdf');
      case '../images/workouts/AtHomeTotalBody4V1.pdf':
        return require('../images/workouts/AtHomeTotalBody4V1.pdf');
      case '../images/workouts/AtHomeTotalBody3V1.pdf':
        return require('../images/workouts/AtHomeTotalBody3V1.pdf');
      case '../images/workouts/FunctionalFitnessHIIT5V1.pdf':
        return require('../images/workouts/FunctionalFitnessHIIT5V1.pdf');
      case '../images/workouts/FunctionalFitnessHIIT4V1.pdf':
        return require('../images/workouts/FunctionalFitnessHIIT4V1.pdf');
      case '../images/workouts/FunctionalFitnessHIIT3V1.pdf':
        return require('../images/workouts/FunctionalFitnessHIIT3V1.pdf');
      case '../images/workouts/TotalBodyTransformation5V1.pdf':
        return require('../images/workouts/TotalBodyTransformation5V1.pdf');
      case '../images/workouts/TotalBodyTransformation4V1.pdf':
        return require('../images/workouts/TotalBodyTransformation4V1.pdf');
      case '../images/workouts/TotalBodyTransformation3V1.pdf':
        return require('../images/workouts/TotalBodyTransformation3V1.pdf');
      default:
        console.log('workout Not found in PDFdocument switch statement');
    }
  }

  renderPage() {
    count++;
    console.error('iteration: ', count);
    var pageCount = 0;
    console.log(
      'this.props.isAutheenticated in PDF renderPage: ',
      this.props.isAuthenticated
    );
    var pageElements = [];
    var auth = this.props.isAuthenticated;
    console.log('auth: ', auth);
    console.log('this.props.pages: ', this.props.pages);
    if (auth.isAuthenticated == true) {
      pageCount = this.props.pages;
      console.log('true: setting pageCount to: ', pageCount);
    } else {
      pageCount = 2;
      console.log('false: setting pageCount to: ', pageCount);
    }

    console.log('pages', pageCount);
    for (var i = 1; i < pageCount; i++)
      pageElements.push(
        <Page key={i} pageNumber={i} onLoadError={console.error} />
      );
    return pageElements;
  }

  render() {
    return (
      <Document file={this.rednerWorkout(this.props.file)}>
        {this.renderPage()}
      </Document>
    );
  }
}

MyPDFDocument.propTypes = {
  isAuthenticated: propTypes.any.isRequired //what to put instead of any
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticatedReducer
});

//need to send an action??
export default connect(mapStateToProps)(MyPDFDocument);

//if have problems with pages out of order visit link later
//https://stackoverflow.com/questions/16480469/how-to-display-whole-pdf-not-only-one-page-with-pdf-js
