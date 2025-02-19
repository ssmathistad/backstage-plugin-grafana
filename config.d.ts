/*
 * Copyright 2021 Kévin Gomez <contact@kevingomez.fr>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Config {
  grafana: {
    /**
     * Domain used by users to access Grafana web UI.
     * Example: https://monitoring.eu.my-company.com/
     * @visibility frontend
     */
    domain?: string;

    /**
     * Path to use for requests via the proxy, defaults to /grafana/api
     * @visibility frontend
     */
    proxyPath?: string;

    /**
     * Is Grafana using unified alerting?
     * @visibility frontend
     */
    unifiedAlerting?: boolean;

    /**
     * List of the grafana hosts
     * @visibility frontend
     */
    hosts: {
      /**
       * Unique ID of the grafana host. This value should be used in the catalog Yaml files to match grafana/source-id.
       * @visibility frontend
       */
      id: string;
      /**
       * Domain used by users to access Grafana web UI.
       * Example: https://monitoring.eu.my-company.com/
       * @visibility frontend
       */
      domain: string;

      /**
       * Path to use for requests via the proxy, defaults to /grafana/api
       * @visibility frontend
       */
      proxyPath?: string;

      /**
       * Is Grafana using unified alerting?
       * @visibility frontend
       */
      unifiedAlerting?: boolean;
    }[];
  };
}
