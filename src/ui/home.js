import React from 'react';
import { Link } from 'react-router';
import { getFields } from 'apis/api'
import store from 'store'
import 'font-awesome/css/font-awesome.css'

export default React.createClass({
  
  getInitialState: function() {
  	return {
  		fields: []
  	}
  },

	componentWillMount: function() { 
		getFields()

		this.unsubscribe = store.subscribe(() => {
			const appState = store.getState()
			this.setState({
				fields: appState.fields
			})
		})
	},

	componentWillUnmount: function() { 
		this.unsubscribe()
	},

	// placeholder: function() {
	// 	return(
	// 		{<i className="fa fa-user" aria-hidden="true"></i> + field.label}
	// 	)
	// },

  render: function() {  	
  	{var fields = this.state.fields}
    return (
      <div className="container">
				<div className="header"><span className="header_text">Sign Up For My Web App</span></div>
				<div className="body">
					{fields.map(function(field, i) {
						{console.log(field.type)}
						if(field.type === "select") {
							return (
								<div className="body_textarea_positionRelative">
									<select className="body_input body_select">
										<option className="body_input">Select Language</option>
										<option className="body_input">English</option>
									</select>
								</div>
							)
						} else if(field.type === "textarea") {
							return (
								<div className="body_textarea_positionRelative">
									<i className={"fa " + field.icon} aria-hidden="true"></i>
									<textarea className="body_input body_textarea" placeholder={field.label}></textarea> 
								</div>
							)
						} else if (field.type === "text" || "email" || "tel") {
							return (
								<div>
									<i className={"fa " + field.icon} aria-hidden="true"></i>
									<input 
										key={"t" + i} 
										type="text" 
										className="body_input" 
										placeholder={field.label}
										>
									</input>			
								</div>
							)
						} 
					})}
				</div>
				<div className="footer">
					<button className="footer_submit_button">Submit Form</button>
				</div>
			</div>
    )
  }
});



// if (field.type === "text" || "email" || "tel")
//<i className="fa fa-user" aria-hidden="true"></i>


					