sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'escalationsefe/test/integration/FirstJourney',
		'escalationsefe/test/integration/pages/EscalationsList',
		'escalationsefe/test/integration/pages/EscalationsObjectPage',
		'escalationsefe/test/integration/pages/CommentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EscalationsList, EscalationsObjectPage, CommentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('escalationsefe') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEscalationsList: EscalationsList,
					onTheEscalationsObjectPage: EscalationsObjectPage,
					onTheCommentsObjectPage: CommentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);