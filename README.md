## MergeRelatedJSON
MergeRelatedJSON is a simple Node.js project geared toward taking individual line item JSON objects from (hypothetically) sub-optimally formatted public data set output such as Lay Title information from [O*NET](http://www.onetcenter.org/developers.html) and merges the data together based on top-level related objects.

In the case of O*NET job data, the script merges all elements with the parent title of CEO and creates a sub-array of "Lay Titles" listing all related job titles.

## Installation and Execution
* Requires Node.js
* `node install lodash`
* `node mergeTitles.js`
* Result is a saved file on your hard drive of O*NET SOC parent codes mapped to Lay Titles in industry

Data comes from http://www.onetcenter.org/developers.html and is available to the public.

Included layTitles.json file uses the 2013 dataset.

