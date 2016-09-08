//TODO: shorten the links? they currently aren't working 

/* Report link and dialogue */
var script_modules = {
	'segmentation1':{
		'link': "https://mixpanel.com/report/811293/segmentation/#action:sum,arb_event:'Complete%20Purchase',bool_op:and,chart_analysis_type:linear,chart_type:bar,from_date:-29,ms_checked:('Bose%20Speaker':!t,'Brawny%20Paper%20Towels':!t,'Harry%20Potter%20DVD':!t,'Lord%20of%20the%20Rings%20Novels':!t,'Samsung%20TV':!t,'XBox%20360':!t),ms_values:!('Bose%20Speaker','Samsung%20TV','Lord%20of%20the%20Rings%20Novels','Harry%20Potter%20DVD','XBox%20360','Brawny%20Paper%20Towels'),segfilter:!((dropdown_tab_index:0,filter:(operand:!(iOS),operator:%3D%3D),property:(name:Platform,source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,filter:(operand:!(Electronics),operator:%3D%3D),property:(name:'Item%20Category',source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,property:(name:'Total%20Charge',source:properties,type:number),selected_property_type:number,type:number)),segment_type:number,subsegment_property:(name:'Cart%20Items',source:properties,type:list),subsegment_type:list,to_date:0,type:general,unit:day",
		'script': 'Segmentation allows to quickly and easily perform deep dives into single events to find out who’s doing what and how. Let’s take a look at an event that’s likely important to you, purchase.<br /><br /><b><i>show report</i></b><br /><br />As you can see, Segmentation allows us to quickly and easily query single events in an in-depth powerful way to see what’s driving sales on your app.'
	},
	'segmentation2':{
		'link': "https://mixpanel.com/report/811293/segmentation/#action:sum,arb_event:'Complete%20Purchase',bool_op:and,chart_type:bar,from_date:-29,ms_checked:('Google%20Adwords':!t,Email:!t,Facebook:!t,LinkedIn:!t,Organic:!f,Twitter:!t),ms_values:!(Organic,Facebook,Twitter,LinkedIn,Email,'Google%20Adwords'),segfilter:!((dropdown_tab_index:0,filter:(operand:!(iOS),operator:%3D%3D),property:(name:Platform,source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,filter:(operand:!(Electronics),operator:%3D%3D),property:(name:'Item%20Category',source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,property:(name:'Total%20Charge',source:properties,type:number),selected_property_type:number,type:number)),segment_type:number,subsegment_property:(name:'Campaign%20Source',source:properties,type:string),subsegment_type:string,to_date:0,type:general,unit:day",
		'script': 'Segmentation allows to quickly and easily perform deep dives into single events to find out who’s doing what and how. Let’s take a look at an event that’s likely important to you, purchase.<br /><br /><b><i>show report</i></b><br /><br />As you can see, Segmentation allows us to quickly see which marketing efforts are performing and which ones aren\'t.'
	},
	'segmentation3':{
		'link': "https://mixpanel.com/report/811293/segmentation/#action:segment,arb_event:'Complete%20Purchase',bool_op:and,chart_type:bar,from_date:-29,ms_checked:('Bose%20Speaker':!t,'Brawny%20Paper%20Towels':!t,'Harry%20Potter%20DVD':!t,'Lord%20of%20the%20Rings%20Novels':!t,'Samsung%20TV':!t,'XBox%20360':!t),ms_values:!('Samsung%20TV','Bose%20Speaker','Lord%20of%20the%20Rings%20Novels','Harry%20Potter%20DVD','XBox%20360','Brawny%20Paper%20Towels'),segfilter:!((dropdown_tab_index:0,filter:(operand:!(iOS),operator:%3D%3D),property:(name:Platform,source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,filter:(operand:!(Electronics),operator:%3D%3D),property:(name:'Item%20Category',source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,property:(name:'Cart%20Items',source:properties,type:list),selected_property_type:list,type:list)),segment_type:list,to_date:0,type:general,unit:day",
		'script': 'Segmentation allows to quickly and easily perform deep dives into single events to find out who’s doing what and how. Let’s take a look at an event that’s likely important to you, purchase.<br /><br /><b><i>show report</i></b><br /><br />As you can see, Segmentation allows us to quickly and easily query single events in an in-depth powerful way to see what’s driving sales on your app.'
	},
	'funnels1':{
		'link':"https://mixpanel.com/report/811293/funnels/#view/1848433/from_date:-29,segfilter:(filters:!((dropdown_tab_index:0,filter:(operand:!(iOS),operator:%3D%3D),property:(name:Platform,source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,property:(name:'Delivery%20Method',source:properties,type:string),selected_property_type:string,type:string)),op:and),segment_type:string,to_date:0",
		'script':"Mixpanel funnels are always calculated in real-time, plus they can be built with events tracked in the past. This means you don’t have to worry about planning a funnel, building a funnel and waiting for it to collect only forward looking data. Here's an example of a first purchase funnel for iOS users segmented by delivery method.<br /><br /><b><i>show report</b></i><br /><br /> Mixpanel allows you to quickly and easily dissect a high level funnel to figure out which cohorts are converting and which ones aren't. This is a very actionable insight; perhaps we discount our same day shipping to increase that conversion rate. <b>As a benchmark, the average e-commerce conversion rate is ~1.4% from landing to first purchase."
	},
	'funnels2':{
		'link':"https://mixpanel.com/report/811293/funnels/#view/1848433/from_date:-29,segfilter:(filters:!((dropdown_tab_index:0,filter:(operand:!(iOS),operator:%3D%3D),property:(name:Platform,source:properties,type:string),selected_property_type:string,type:string),(dropdown_tab_index:0,property:(name:'Campaign%20Source',source:properties,type:string),selected_property_type:string,type:string)),op:and),segment_type:string,to_date:0",
		'script':'Mixpanel funnels are always calculated in real-time, plus they can be built with events tracked in the past. This means you don’t have to worry about planning a funnel, building a funnel and waiting for it to collect only forward looking data. Here\'s an example of a first purchase funnel for iOS users segmented by delivery method.<br /><br /><b><i>show report</b></i><br /><br /> Mixpanel allows you to quickly and easily dissect a high level funnel to figure out which cohorts are converting and which ones aren\'t. This is a very actionable insight; perhaps we discount our same day shipping to increase that conversion rate. <b>As a benchmark, the average e-commerce conversion rate is ~1.4% from landing to first purchase.'
	},
	'retention1':{
		'link':"https://mixpanel.com/report/811293/retention/#born_event:'Account%20Created',born_filters:!((dropdown_tab_index:0,filter:(operand:!(iOS),operator:%3D%3D),property:(name:Platform,source:properties,type:string),selected_property_type:string,type:string)),date_range:(from:-13,to:0),date_unit:day,event:'Complete%20Purchase',on:'properties%5B%22Experiment%20Group%22%5D',page:base,percentage_view:!t,retention_type:birth,segmentation_event:'Complete%20Purchase',segments:multiple,sort_column:cohort,sort_desc:!f",
		'script':'<b>A typical online store gets 43% if its revenue from repeat customers.</b> This means optimizing retention is key in driving revenue. Our retention reporting allows you to figure out specific cohorts being retained or not retained.<br /><br /> Today, we\'re going to focus on our <i>First-Time Retention Report</i>, which shows us the number of users who have registered, then the percentage of those registered users who came back to purchase again and again.<br /><br /><b><i>show report</b></i><br /><br />Let\'s say we\'re running an A/B test on our checkout portal, as you can see, Mixpanel can break down Retention reports by property values. This enables us to see different effects on retention. Looks like experiment A is yielding the most repeat buyers.'
	},
	'retention2':{
		'link':"https://mixpanel.com/report/811293/retention/#born_event:'Account%20Created',date_range:(from:-84,to:0),date_unit:week,event:'Complete%20Purchase',on:properties%5B%22UTM_source%22%5D,page:base,percentage_view:!t,retention_type:birth,segmentation_event:'Complete%20Purchase',segments:multiple,sort_column:cohort,sort_desc:!f",
		'script':'<b>A typical online store gets 43% if its revenue from repeat customers.</b> This means optimizing retention is key in driving revenue. Our retention reporting allows you to figure out specific cohorts being retained or not retained.<br /><br /> Today, we\'re going to focus on our <i>First-Time Retention Report</i>, which shows us the number of users who have registered, then the percentage of those registered users who came back to purchase again and again.<br /><br /><b><i>show report</b></i><br /><br />Mixpanel can also break down retention reports by property values, which is incredibly useful for measuring the long-term effects of your marketing effors; how many repeat purchases are different campaigns yielding? It looks like Facebook is performing slightly better than Twitter or LinkedIn.'
	}
};

/*
Numbers to Objectives:

1 -> increasing number of sales
2 -> optimizing revenue
3 -> sales insights (which products are selling, which aren't)
4 -> insight into marketing ROI
5 -> increase first time buyers (activation)
6 -> increase repeat buyers (retention)
*/

/* Report name per input (decision tree) */
var input_combos_to_reports = {
	'smb/mm':{
		'product':{
			'notif_yes':{
				"1":['segmentation1'],
				"2":['segmentation1'],
				"3":['segmentation1'],
				"4":['segmentation2'],
				"5":['funnels1'],
				"6":['retention1', 'notification1']
			},
			'notif_no':{
				"1":['segmentation1'],
				"2":['segmentation1'],
				"3":['segmentation1'],
				"4":['segmentation2'],
				"5":['funnels1'],
				"6":['retention1']
			}
		},
		'marketing':{
			'notif_yes':{
				"1":['segmentation2'],
				"2":['segmentation2'],
				"3":['segmentation1'],
				"4":['segmentation2'],
				"5":['funnels2'],
				"6":['retention2', 'notification2']
			},
			'notif_no':{
				"1":['segmentation2'],
				"2":['segmentation2'],
				"3":['segmentation1'],
				"4":['segmentation2'],
				"5":['funnels2'],
				"6":['retention2']
			}
		},
		'product/marketing':{
			'notif_yes':{
				"1":['segmentation2'],
				"2":['segmentation2'],
				"3":['segmentation1'],
				"4":['segmentation2'],
				"5":['funnels2'],
				"6":['retention2', 'notification2']
			},
			'notif_no':{
				"1":['segmentation2'],
				"2":['segmentation2'],
				"3":['segmentation1'],
				"4":['segmentation2'],
				"5":['funnels2'],
				"6":['retention2']
			}
		}
	},
	'comm/ent':{
		'product':{
			'notif_yes':{
				"1":[],
				"2":[],
				"3":[],
				"4":[],
				"5":[],
				"6":[]
			},
			'notif_no':{
				"1":[],
				"2":[],
				"3":[],
				"4":[],
				"5":[],
				"6":[]
			}
		},
		'marketing':{
			'notif_yes':{
				"1":[],
				"2":[],
				"3":[],
				"4":[],
				"5":[],
				"6":[]
			},
			'notif_no':{
				"1":[],
				"2":[],
				"3":[],
				"4":[],
				"5":[],
				"6":[]
			}
		},
		'product/marketing':{
			'notif_yes':{
				"1":[],
				"2":[],
				"3":[],
				"4":[],
				"5":[],
				"6":[]
			},
			'notif_no':{
				"1":[],
				"2":[],
				"3":[],
				"4":[],
				"5":[],
				"6":[]
			}
		}
	}
};
var script_intro = "Mixpanel is a platform agnostic, behavioral analytics tool that enables you and your team to make data driven decisions to optimize your business. We offer in depth, flexible user behavior reporting all in one place, plus tools to allow you to take action on discovered insights. The goal is to enable you and your entire team to grow your business in smart data driven ways. <br /><br />We have three core Engagement reports, Segmentation, Funnels and Retention, a Mixpanel People platform, which allows you to profile, target and notify your users, plus mobile A/B testing, predictive analytics and an application platform that allows you to build custom reports on top of your data housed in Mixpanel. <br /><br />Based on your goals and objectives, today we’ll be going through:";
