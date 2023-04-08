# Honeycomb

[![DOI:10.1590/1516-4446-2020-1675](https://img.shields.io/badge/DOI-10.1590%2F1516--4446--2020--1675-orange)](https://doi.org/10.1590/1516-4446-2020-1675) [![docs](https://img.shields.io/badge/docs-stable-blue)](https://brown-ccv.github.io/honeycomb-docs/)

Honeycomb is a template for reproducible psychophysiological tasks for clinic, laboratory, and home use. It is maintained by members of the [Center for Computation and Visualization](https://ccv.brown.edu) and the [Neuromotion Lab](http://borton.engin.brown.edu/) at Brown University. To learn about installation, usage and deployment please [visit our documentation](https://brown-ccv.github.io/honeycomb-docs/).

*Note: previously named Neuro Task Starter, some references may still refer to it as such.*

If you use Honeycomb in your work, please cite:

[Provenza, N.R., Gelin, L.F.F., Mahaphanit, W., McGrath, M.C., Dastin-van Rijn, E.M., Fan, Y., Dhar, R., Frank, M.J., Restrepo, M.I., Goodman, W.K. and Borton, D.A., 2021. Honeycomb: a template for reproducible psychophysiological tasks for clinic, laboratory, and home use. Brazilian Journal of Psychiatry, 44, pp.147-155.](https://doi.org/10.1590/1516-4446-2020-1675)


## SweetBean setup:
in you firebase project add a database "meta/*study_name*/" with the entry attempts. This will count the attempts of participants and is used to get the next trial_sequence

setup your experiment using the sweet_bean.py

copy your timelines in the src/assets/timelines folder (in this example there are 3 trial sequence folders each containing trial sequences for 3 blocks)

to test the task use: npm run dev:firebase
to build the task use: npm run build:firebase


