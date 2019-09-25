import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios'
};

class App extends React.Component {
     constructor(props) {
        super(props);

        this.state = {
            view: 'month',
            weeks: 6
        };
    }
    changeView = (event) => {
        let weekNr = 0;
        switch (event.target.value) {
            case 'month':
                weekNr = 6;
                break;
            case 'week':
                weekNr = 1;
                break;
        }
        this.setState({
            view: event.target.value,
            weeks: weekNr
        });
    }
    render () {
        return (
            <mobiscroll.Form>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Month view and week view</mobiscroll.FormGroupTitle>
                    <mobiscroll.Segmented name="view" value="month" checked={this.state.view === 'month'} onChange={this.changeView}>
                        Month
                    </mobiscroll.Segmented>
                    <mobiscroll.Segmented name="view" value="week" checked={this.state.view === 'week'} onChange={this.changeView}>
                        Week
                    </mobiscroll.Segmented>
                    <label>
					    Date
                        <mobiscroll.Calendar
                            display="inline"
                            weeks={this.state.weeks}
                        />
                    </label>
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        );
    }    
}

export default calender-data;