import * as React from "react";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import axios from "axios";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";

const styles = {
  toolbarRoot: {
    position: "relative"
  },
  progress: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0
  }
};

const ToolbarWithLoading = withStyles(styles, { name: "Toolbar" })(
  ({ children, classes, ...restProps }) => (
    <div className={classes.toolbarRoot}>
      <Toolbar.Root {...restProps}>{children}</Toolbar.Root>
      <LinearProgress className={classes.progress} />
    </div>
  )
);

const mapAppointmentData = appointment => ({
  ...appointment,
  startDate: appointment.start.dateTime,
  endDate: appointment.end.dateTime,
  title: appointment.summary,
  notes: appointment.description
});

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentDate: "2020-02-29",
      currentViewName: "Day"
    };
    this.loadData = this.loadData.bind(this);
    this.currentViewNameChange = currentViewName => {
      this.setState({ currentViewName, loading: true });
    };
    this.currentDateChange = currentDate => {
      this.setState({ currentDate, loading: true });
    };
  }

  componentDidMount() {
    this.loadData();
  }

    componentDidUpdate() {
      this.loadData();
    }

  async loadData() {
    try {
      const results = await axios.get(
        `https://greencon.herokuapp.com/admin/getUserCalendarEvents`
      );
      this.setState({ data: results.data, loading: false });
    } catch (err) {
        this.setState({ loading: false });
    }
  }

  render() {
    const { data, loading, currentDate, currentViewName } = this.state;
    const formattedData = data ? data.map(mapAppointmentData) : [];

    return (
      <Paper>
        <Scheduler data={formattedData} height={660}>
          <ViewState
            currentDate={currentDate}
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
            onCurrentDateChange={this.currentDateChange}
          />
          <DayView startDayHour={0} endDayHour={24} />
          <WeekView startDayHour={0} endDayHour={24} />
          <Appointments />
          <Toolbar
            {...(loading ? { rootComponent: ToolbarWithLoading } : null)}
          />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <AppointmentTooltip showOpenButton showCloseButton />
          <AppointmentForm readOnly />
        </Scheduler>
      </Paper>
    );
  }
}
