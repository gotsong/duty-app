import 'ts-helpers';

import {
  it,
  fit,
  describe,
  fdescribe,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import {BaseRequestOptions, Http, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {provide} from "@angular/core";

// Load the implementations that should be tested
import {Api} from './services/api/index';
import {App} from './index';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    MockBackend,
    BaseRequestOptions,
    // Provide a mocked (fake) backend for Http
    provide(Http, {
      useFactory: function useFactory(backendInstance: MockBackend, defaultOptions: BaseRequestOptions) {
        return new Http(backendInstance, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    App,
    Api
  ]);

  it('should have an url', inject([App], (app:App) => {
    expect(app.url).toEqual('//github.com/cmelion/generator-ng2-webpack');
  }));

  describe('pipes', function() {});

  describe('services', function() {
    require('./services/api/spec');
  });

  describe('subcomponents', function() {
    require('./components/home/spec');
  })

});
