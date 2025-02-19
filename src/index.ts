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

export { DashboardViewer } from './components/DashboardViewer';
export {
  grafanaPlugin,
  EntityGrafanaDashboardsCard,
  EntityGrafanaAlertsCard,
  EntityOverviewDashboardViewer,
} from './plugin';
export {
  isDashboardSelectorAvailable,
  isAlertSelectorAvailable,
  isOverviewDashboardAvailable,
  dashboardSelectorFromEntity,
  alertSelectorFromEntity,
  overviewDashboardFromEntity,
  GRAFANA_ANNOTATION_DASHBOARD_SELECTOR,
  GRAFANA_ANNOTATION_SOURCE_ID,
  GRAFANA_ANNOTATION_ALERT_LABEL_SELECTOR,
  GRAFANA_ANNOTATION_TAG_SELECTOR,
  GRAFANA_ANNOTATION_OVERVIEW_DASHBOARD,
} from './components/grafanaData';
