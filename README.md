## GroupRelatedJSON
MergeRelatedJSON is a simple Node.js project geared toward taking individual line item JSON objects from (hypothetically) sub-optimally formatted public data set output such as Lay Title information from [O*NET](http://www.onetcenter.org/developers.html) and groups the data together based on top-level related objects.

In the case of O*NET job data, the script merges all elements with the parent title of CEO and creates a sub-array of "Lay Titles" listing all related job titles.

## Installation and Execution
* Requires Node.js
* `npm install`
* `node mergeTitles.js`
* Result is a saved file on your hard drive of O*NET SOC parent codes mapped to Lay Titles in industry

Data included in the repo is a small sample that comes from http://www.onetcenter.org/developers.html. The entire dataset is available there to the public.


