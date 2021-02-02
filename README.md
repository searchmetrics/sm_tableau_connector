# sm_tableau_connector
# Tableau Documentation

To use this connector, the customer needs to have a Tableau License, Suite API Key and Suite API Secret available. 
The user needs to open Tableau and click on *Web Data Connector*
![Tableau Web Data Connector](https://public.tableau.com/s/sites/default/files/media/tableaupublic91wdcconnect.png)

Then give this URL (http://status.searchmetrics.com/sm_tableau_connector/)<br>
Before you can use that, you will need to create a token, to use on Tableau. After created you can put the token on the field *Token* and choose the API Call that you want to extract the data.

This is an overview of our available calls on Tableau.
Currently we have 35 calls available:
|Report|	Description|
-------- | -------- | 
ResearchOrganicGetListRankingsDomain	|This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country, based on the latest month available in our database.
ResearchOrganicGetListRankingsKeyword	|This call returns a list of Google's organic rankings for a given keyword, based on the previous week available in our database and ordered by position in ascending order. As well a trend in comparison to the previous week is returned.
ResearchOrganicGetListRankingsKeywordLongtail	|This call returns a list of Google's organic rankings for a given keyword, based on the latest rankings available in our database and ordered by position in ascending order. As well a trend in comparison to the previous data point is returned. Please note that a certain subscription level may be needed to use this call.
ResearchLinksGetListBacklinks|	This call returns backlinks for a given URL including a lot of additional information.
ResearchContentGetListUrlKeywordRankings|	This call returns the list of keywords of a given URL.
ResearchKeywordsGetListLosers|	This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given domain.
ResearchKeywordsGetListWinners|	This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given domain.
ResearchOrganicGetListSeoVisibilityTop100Losers|	This call returns the domains with the largest absolute visibility losses for organic search results in the previous week in a given country.
ResearchOrganicGetListSeoVisibilityTop100Winners|	This call returns the domains with the largest absolute visibility gains for organic search results in the previous week in a given country.
ResearchContentGetListTopUrls|	This call returns the list of the top URLs of a given domain.
ResearchContentGetListLoserUrls|This call returns the list of the loser URLs of a given domain.
ResearchContentGetListWinnerUrls|This call returns the list of the winner URLs of a given domain.
ResearchContentGetListCompetitorUrls|This call returns the list of competitors of a given URL.
ResearchOrganicGetListCompetitors|This call returns the competitors in the organic search. A competitor is defined as a domain that shows up in the organic search results for a keyword for which the original domain has a ranking as well.
ResearchOrganicGetListSerpSpread|This data represents the relative distribution of a site's search results (SERPs) in Google in a given country based on the latest data in our database. The rankings are split into 7 clusters: Position 1-3, Position 4-6, Position 7-10, Position 11-21, Position 21-30, Position 31-40, Position 41+. For each group, the absolute number of keywords as well as the distribution in percent is returned.
ResearchOrganicGetListSubdomains|This call returns the Subdomains in the organic search. A subdomain is defined with the domain in the organic search results.
ResearchKeywordsGetListSimilarKeywords|This call returns keywords that contain a given term within a word or phrase. A result example for the given term "auto" would be "automobile" and "auto insurance".
ResearchOrganicGetListIndustrySpread|Searchmetrics organizes all analyzed keywords into standard industry sectors. The Industry Spread shows the distribution of all keywords of a domain on the different industry sectors.
ResearchLinksGetListLinkedPages|This call delivers the subpages of a given domain, subdomain or URL that are linked from external pages ordered by the number of external links.
ResearchLinksGetListLinktext|This call returns the anchor texts of backlinks for a given URL, ordered by frequency of occurrence.
ResearchLinksGetValueLinkRank|This call returns the Link Rank for a given domain in a given country, indicating the strength of the selected domain with regard to linking in comparison with all other domains of the country in question. The more links are pointing to the domain, the better the link rank.
ResearchUniversalGetListRankingsDomain|This call returns a list keywords of a domain that had rankings in the universal search results in Google in a given country, based on the latest results in our database.
ResearchOrganicGetValueSeoVisibility|This call returns the Searchmetrics Visibility in the organic search for a domain for a specified country based on the latest data in our database. In addition, a trend in comparision to the previous week is delivered.
ResearchOrganicGetValueSeoVisibilityWorld|This call returns the Searchmetrics Visibility across all countries for a domain in the organic search, based on the latest data in our database.
ResearchOrganicGetValueSeoRank|This call returns the SEO Visibility rank (SEORank) for a domain in a given country. The rank represents the position of the domain in the top 100,000 SEO Visibility list for the country.
ResearchUniversalGetListVisibility||	This call returns the Searchmetrics Visibility in the Universal Search for a domain for a specified country based on the latest data in our database.
ResearchOrganicGetListSeoVisibilityCountry|This call returns the Searchmetrics Visibility across all countries for a domain in the organic search, based on the latest data in our database.
ResearchKeywordsGetListKeywordinfo|This call returns search-related information for a given keyword for a given country for the current month.
ResearchSocialGetListTopUrls|This call returns the Social Visibility for URLs of a given domain, sorted in descending order by Social Visibility.
ResearchOrganicGetListSeoVisibilityHistoric|This call returns the Searchmetrics Visibility in the organic search for a domain for a specified country based for a given timeframe.
ResearchOrganicGetListRankingsDomainHistoric|This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country in a given week. Please note that a certain subscription level may be needed to use this call.
ProjectOrganicGetListRankingsFilter|This call returns the rankings for the monitored keywords for a domain (either a project or a benchmark domain) in the organic search results in a given country, based on a given date.
ProjectOrganicGetListBenchmarkRankings|This call returns the competitors rankings for benchmarks.
ProjectOrganicGetListLosers|This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given project domain.
ProjectOrganicGetListWinners|	This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given project domain.
