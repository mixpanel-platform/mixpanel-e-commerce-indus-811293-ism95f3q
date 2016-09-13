//TODO: shorten the links? they currently aren't working 

/* Report link and dialogue */
var script_modules = {
	'segmentation1':{
		'link': "http://bit.ly/2crS5ts",
		'script': 'Segmentation allows to quickly and easily perform deep dives into single events to find out who’s doing what and how. Let’s take a look at an event that’s likely important to you, purchase.<br /><br /><b><i>show report</i></b><br /><br />As you can see, Segmentation allows us to quickly and easily query single events in an in-depth powerful way to see what’s driving sales on your app.'
	},
	'segmentation2':{
		'link': "http://bit.ly/2bYyLjy",
		'script': 'Segmentation allows to quickly and easily perform deep dives into single events to find out who’s doing what and how. Let’s take a look at an event that’s likely important to you, purchase.<br /><br /><b><i>show report</i></b><br /><br />As you can see, Segmentation allows us to quickly see which marketing efforts are performing and which ones aren\'t.'
	},
	'segmentation3':{
		'link': "http://bit.ly/2c03FNc",
		'script': 'Segmentation allows to quickly and easily perform deep dives into single events to find out who’s doing what and how. Let’s take a look at an event that’s likely important to you, purchase.<br /><br /><b><i>show report</i></b><br /><br />As you can see, Segmentation allows us to quickly and easily query single events in an in-depth powerful way to see what’s driving sales on your app.'
	},
	'funnels1':{
		'link':"http://bit.ly/2cM6u5S",
		'script':"Mixpanel funnels are always calculated in real-time, plus they can be built with events tracked in the past. This means you don’t have to worry about planning a funnel, building a funnel and waiting for it to collect only forward looking data. Here's an example of a first purchase funnel for iOS users segmented by delivery method.<br /><br /><b><i>show report</b></i><br /><br /> Mixpanel allows you to quickly and easily dissect a high level funnel to figure out which cohorts are converting and which ones aren't. This is a very actionable insight; perhaps we discount our same day shipping to increase that conversion rate. <b>As a benchmark, the average e-commerce conversion rate is ~1.4% from landing to first purchase."
	},
	'funnels2':{
		'link':"http://bit.ly/2crSiwR",
		'script':'Mixpanel funnels are always calculated in real-time, plus they can be built with events tracked in the past. This means you don’t have to worry about planning a funnel, building a funnel and waiting for it to collect only forward looking data. Here\'s an example of a first purchase funnel for iOS users segmented by delivery method.<br /><br /><b><i>show report</b></i><br /><br /> Mixpanel allows you to quickly and easily dissect a high level funnel to figure out which cohorts are converting and which ones aren\'t. This is a very actionable insight; perhaps we discount our same day shipping to increase that conversion rate. <b>As a benchmark, the average e-commerce conversion rate is ~1.4% from landing to first purchase.'
	},
	'retention1':{
		'link':"http://bit.ly/2chEPUO",
		'script':'<b>A typical online store gets 43% if its revenue from repeat customers.</b> This means optimizing retention is key in driving revenue. Our retention reporting allows you to figure out specific cohorts being retained or not retained.<br /><br /> Today, we\'re going to focus on our <i>First-Time Retention Report</i>, which shows us the number of users who have registered, then the percentage of those registered users who came back to purchase again and again.<br /><br /><b><i>show report</b></i><br /><br />Let\'s say we\'re running an A/B test on our checkout portal, as you can see, Mixpanel can break down Retention reports by property values. This enables us to see different effects on retention. Looks like experiment A is yielding the most repeat buyers.'
	},
	'retention2':{
		'link':"http://bit.ly/2cADeub",
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
