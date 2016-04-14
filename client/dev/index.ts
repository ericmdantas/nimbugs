/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {BugCmp} from './bug/components/bug_cmp';

bootstrap(BugCmp, [HTTP_PROVIDERS]);
