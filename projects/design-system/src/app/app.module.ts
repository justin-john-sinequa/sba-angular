import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsFacetModule, FacetConfig, FacetListParams, FacetState, FacetTreeParams } from "@sinequa/components/facet";
import { IntlModule, Locale, LocaleData, LocalesConfig } from "@sinequa/core/intl";
import { WebServicesModule, StartConfig, StartConfigWebService } from "@sinequa/core/web-services";
import { LoginInterceptor } from "@sinequa/core/login";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResultModule } from "@sinequa/components/result";
import { BsSelectionModule } from "@sinequa/components/selection";
import { BsLabelsModule } from "@sinequa/components/labels";
import { ResultsComponent } from './results/results.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BsActionModule } from "@sinequa/components/action";
import { FormsModule } from "@angular/forms";
import { InputsComponent } from './inputs/inputs.component';
import { SearchComponent } from './search/search.component';
import { BsSearchModule, SearchOptions } from "@sinequa/components/search";
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtilsModule } from "@sinequa/components/utils";
import { BsAutocompleteModule } from "@sinequa/components/autocomplete";
import { BsResultsViewModule, ResultsView } from "@sinequa/components/results-view";
import { BsAlertsModule } from "@sinequa/components/alerts";
import { MetadataModule } from "@sinequa/components/metadata";
import { CollapseModule } from "@sinequa/components/collapse";
import { BsPreviewModule } from "@sinequa/components/preview";
import { FacetComponent } from './modules/facet/facet/facet.component';
import { AlertsComponent } from './modules/alerts-module/alerts/alerts.component';
import { BsNotificationModule } from "@sinequa/components/notification";
import { PreviewComponent } from './preview/preview.component';
import { SqPreviewComponent } from './preview/sq-preview/sq-preview.component';
import { CodeComponent } from './code/code.component';
import { FacetModuleComponent } from './modules/facet/facet-module.component';
import { FacetTreeComponent } from './modules/facet/facet-tree/facet-tree.component';
import { FacetListComponent } from './modules/facet/facet-list/facet-list.component';
import { FacetFiltersComponent } from './modules/facet/facet-filters/facet-filters.component';
import { FacetRangeComponent } from './modules/facet/facet-range/facet-range.component';
import { FacetBarComponent } from './modules/facet/facet-bar/facet-bar.component';
import { FacetMultiComponent } from './modules/facet/facet-multi/facet-multi.component';
import { MySearchComponent } from './modules/facet/my-search/my-search.component';
import { FacetTagCloudComponent } from './modules/facet/facet-tag-cloud/facet-tag-cloud.component';
import { RefineComponent } from './modules/facet/refine/refine.component';
import { PreviewModuleComponent } from './modules/preview/preview-module.component';
import { PreviewHighlightsComponent } from './modules/preview/preview-highlights/preview-highlights.component';
import { PreviewLinksComponent } from './modules/preview/preview-links/preview-links.component';
import { PreviewPopupComponent } from './modules/preview/preview-popup/preview-popup.component';
import { PreviewPanelComponent } from './modules/preview/preview-panel/preview-panel.component';
import { ResultLinkPreviewComponent } from './modules/preview/result-link-preview/result-link-preview.component';
import { FacetPreviewComponent } from './modules/preview/facet-preview/facet-preview.component';
import { SimilarDocumentsComponent } from './modules/preview/similar-documents/similar-documents.component';
import { PreviewEntityFacetComponent } from './modules/preview/preview-entity-facet/preview-entity-facet.component';
import { PreviewEntityPanelComponent } from './modules/preview/preview-entity-panel/preview-entity-panel.component';
import { PreviewExtractsPanelComponent } from './modules/preview/preview-extracts-panel/preview-extracts-panel.component';
import { PreviewSearchFormComponent } from './modules/preview/preview-search-form/preview-search-form.component';
import { PreviewPagesPanelComponent } from './modules/preview/preview-pages-panel/preview-pages-panel.component';
import { PreviewPageFormComponent } from './modules/preview/preview-page-form/preview-page-form.component';
import { PreviewMinimapComponent } from './modules/preview/preview-minimap/preview-minimap.component';
import { FacetPreviewComponentComponent } from './modules/preview/facet-preview-component/facet-preview-component.component';
import { ResultModuleComponent } from './modules/result/result-module.component';

// Environment
import { environment } from "../environments/environment";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GlobalService } from './global.service';
import { BsModalModule } from '@sinequa/components/modal';
import { ModalRef, MODAL_MODEL } from '@sinequa/core/modal';
import { ResultTitleComponent } from './modules/result/result-title/result-title.component';
import { ResultExtractsComponent } from './modules/result/result-extracts/result-extracts.component';
import { ResultMissingTermsComponent } from './modules/result/result-missing-terms/result-missing-terms.component';
import { ResultThumbnailComponent } from './modules/result/result-thumbnail/result-thumbnail.component';
import { UserRatingComponent } from './modules/result/user-rating/user-rating.component';
import { SponsoredResultsComponent } from './modules/result/sponsored-results/sponsored-results.component';
import { ResultsCounterComponent } from './modules/result/results-counter/results-counter.component';
import { ResultIconComponent } from './modules/result/result-icon/result-icon.component';
import { ResultSourceComponent } from './modules/result/result-source/result-source.component';
import { BsTimelineModule } from '@sinequa/analytics/timeline';
import { FacetTestingComponent } from './modules/facet/facet-testing/facet-testing.component';
import { BasketsModuleComponent } from './modules/baskets-module/baskets-module.component';
import { EditBasketComponent } from './modules/baskets-module/edit-basket/edit-basket.component';
import { ManageBasketsComponent } from './modules/baskets-module/manage-baskets/manage-baskets.component';
import { SelectBasketsComponent } from './modules/baskets-module/select-baskets/select-baskets.component';
import { ResultBasketsComponent } from './modules/baskets-module/result-baskets/result-baskets.component';
import { BasketsMenuComponent } from './modules/baskets-module/baskets-menu/baskets-menu.component';
import { FacetBasketsComponent } from './modules/baskets-module/facet-baskets/facet-baskets.component';
import { BsBasketsModule } from '@sinequa/components/baskets';
import { CollapseModuleComponent } from './modules/collapse-module/collapse-module.component';
import { CommentsModuleComponent } from './modules/comments-module/comments-module.component';
import { FeedbackModuleComponent } from './modules/feedback-module/feedback-module.component';
import { LabelsModuleComponent } from './modules/labels-module/labels-module.component';
import { MachineLearningModuleComponent } from './modules/machine-learning-module/machine-learning-module.component';
import { CollapseComponent } from './modules/collapse-module/collapse/collapse.component';
import { CollapseButtonComponent } from './modules/collapse-module/collapse-button/collapse-button.component';
import { CommentsComponent } from './modules/comments-module/comments/comments.component';
import { CommentsModule } from '@sinequa/components/comments';
import { FeedbackMenuComponent } from './modules/feedback-module/feedback-menu/feedback-menu.component';
import { BsFeedbackModule } from '@sinequa/components/feedback';
import { LabelsAutocompleteComponent } from './modules/labels-module/labels-autocomplete/labels-autocomplete.component';
import { RenameLabelComponent } from './modules/labels-module/rename-label/rename-label.component';
import { LabelsMenuComponent } from './modules/labels-module/labels-menu/labels-menu.component';
import { DeleteLabelComponent } from './modules/labels-module/delete-label/delete-label.component';
import { AddLabelComponent } from './modules/labels-module/add-label/add-label.component';
import { EditLabelComponent } from './modules/labels-module/edit-label/edit-label.component';
import { AnswerCardComponent } from './modules/machine-learning-module/answer-card/answer-card.component';
import { PassageListComponent } from './modules/machine-learning-module/passage-list/passage-list.component';
import { TopPassagesComponent } from './modules/machine-learning-module/top-passages/top-passages.component';
import { MLModule } from '@sinequa/components/machine-learning';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { MetadataModuleComponent } from './modules/metadata-module/metadata-module.component';
import { MetadataComponent } from './modules/metadata-module/metadata/metadata.component';
import { AdvancedModuleComponent } from './modules/advanced-module/advanced-module.component';
import { AlertsModuleComponent } from './modules/alerts-module/alerts-module.component';
import { AdvancedFormCheckboxComponent } from './modules/advanced-module/advanced-form-checkbox/advanced-form-checkbox.component';
import { AdvancedFormInputComponent } from './modules/advanced-module/advanced-form-input/advanced-form-input.component';
import { AdvancedFormRangeComponent } from './modules/advanced-module/advanced-form-range/advanced-form-range.component';
import { AdvancedFormSelectComponent } from './modules/advanced-module/advanced-form-select/advanced-form-select.component';
import { AdvancedFormMultiInputComponent } from './modules/advanced-module/advanced-form-multi-input/advanced-form-multi-input.component';
import { DatePickerComponent } from './modules/advanced-module/date-picker/date-picker.component';
import { DateRangePickerComponent } from './modules/advanced-module/date-range-picker/date-range-picker.component';
import { SelectComponent } from './modules/advanced-module/select/select.component';
import { BsAdvancedModule } from '@sinequa/components/advanced';
import { EditAlertComponent } from './modules/alerts-module/edit-alert/edit-alert.component';
import { ManageAlertsComponent } from './modules/alerts-module/manage-alerts/manage-alerts.component';
import { AlertsMenuComponent } from './modules/alerts-module/alerts-menu/alerts-menu.component';
import { AutocompleteModuleComponent } from './modules/autocomplete-module/autocomplete-module.component';
import { AutocompleteListComponent } from './modules/autocomplete-module/autocomplete-list/autocomplete-list.component';
import { FieldSearchItemsComponent } from './modules/autocomplete-module/field-search-items/field-search-items.component';
import { ModalModuleComponent } from './modules/modal-module/modal-module.component';
import { ModalComponent } from './modules/modal-module/modal/modal.component';
import { ModalHeaderComponent } from './modules/modal-module/modal-header/modal-header.component';
import { ModalFooterComponent } from './modules/modal-module/modal-footer/modal-footer.component';
import { LoginComponent } from './modules/modal-module/login/login.component';
import { ConfirmComponent } from './modules/modal-module/confirm/confirm.component';
import { OverrideUserComponent } from './modules/modal-module/override-user/override-user.component';
import { EditableComponent } from './modules/modal-module/editable/editable.component';
import { PromptComponent } from './modules/modal-module/prompt/prompt.component';
import { HelpComponent } from './modules/modal-module/help/help.component';
import { NotificationModuleComponent } from './modules/notification-module/notification-module.component';
import { NotificationsComponent } from './modules/notification-module/notifications/notifications.component';
import { NotificationsManagerComponent } from './modules/notification-module/notifications-manager/notifications-manager.component';
import { ResultsViewModuleComponent } from './modules/results-view-module/results-view-module.component';
import { ResultsViewSelectorComponent } from './modules/results-view-module/results-view-selector/results-view-selector.component';
import { ResultsGridViewComponent } from './modules/results-view-module/results-grid-view/results-grid-view.component';

// Initialization of @sinequa/core
export const startConfig: StartConfig = {
    app: "app",
    production: environment.production,
    autoSAMLProvider: environment.autoSAMLProvider,
    auditEnabled: true
};

// @sinequa/core config initializer
export function StartConfigInitializer(startConfigWebService: StartConfigWebService) {
    return () => startConfigWebService.fetchPreLoginAppConfig();
}

// Search options (search service)
export const searchOptions: SearchOptions = {
    routes: ["facet"]
};

// List of facet configurations (of type list and tree)
export const allFacets: FacetConfig<FacetListParams | FacetTreeParams>[] = [
    {
        name: "facet1",
        title: "Modified",
        type: "list",
        icon: "fas fa-calendar-day",
        parameters: {
            aggregation: "Modified"
        }
    },
    {
        name: "facet2",
        title: "Tree path",
        type: "tree",
        icon: "fas fa-sitemap",
        parameters: {
            aggregation: "Treepath"
        }
    },
    {
        name: "facet3",
        title: "Person",
        type: "list",
        icon: "fas fa-user",
        parameters: {
            aggregation: "Person"
        }
    }
];

// List of default facets displayed (only facet2 is displayed here)
export const defaultFacets: FacetState[] = [
    { name: "facet1", position: 0 },
    { name: "facet2", position: 1 },
    { name: "facet3", position: 2 }
];

const data: LocaleData = {
    intl: {
        locale: "en-US"
    },
    messages: {}
};

const resultsView: ResultsView = {
    name: 'name',
    type: 'type'
  };

export class AppLocalesConfig implements LocalesConfig {
    defaultLocale: Locale;
    locales?: Locale[];

    constructor() {
        this.locales = [
            { name: "en", display: "msg#locale.en", data },
            { name: "fr", display: "msg#locale.fr", data },
            { name: "de", display: "msg#locale.de", data },
        ];
        this.defaultLocale = this.locales[0];
    }
}

@NgModule({
    declarations: [
        AppComponent,
        ResultsComponent,
        ButtonsComponent,
        InputsComponent,
        SearchComponent,
        MenuComponent,
        NavbarComponent,
        FacetComponent,
        AlertsComponent,
        PreviewComponent,
        SqPreviewComponent,
        CodeComponent,
        FacetModuleComponent,
        FacetTreeComponent,
        FacetListComponent,
        FacetFiltersComponent,
        FacetRangeComponent,
        FacetBarComponent,
        FacetMultiComponent,
        MySearchComponent,
        FacetTagCloudComponent,
        RefineComponent,
        PreviewModuleComponent,
        PreviewHighlightsComponent,
        PreviewLinksComponent,
        PreviewPopupComponent,
        PreviewPanelComponent,
        ResultLinkPreviewComponent,
        FacetPreviewComponent,
        SimilarDocumentsComponent,
        PreviewEntityFacetComponent,
        PreviewEntityPanelComponent,
        PreviewExtractsPanelComponent,
        PreviewSearchFormComponent,
        PreviewPagesPanelComponent,
        PreviewPageFormComponent,
        PreviewMinimapComponent,
        FacetPreviewComponentComponent,
        SearchBarComponent,
        ResultModuleComponent,
        ResultTitleComponent,
        ResultExtractsComponent,
        ResultMissingTermsComponent,
        ResultThumbnailComponent,
        UserRatingComponent,
        SponsoredResultsComponent,
        ResultsCounterComponent,
        ResultIconComponent,
        ResultSourceComponent,
        FacetTestingComponent,
        BasketsModuleComponent,
        EditBasketComponent,
        ManageBasketsComponent,
        SelectBasketsComponent,
        ResultBasketsComponent,
        BasketsMenuComponent,
        FacetBasketsComponent,
        CollapseModuleComponent,
        CommentsModuleComponent,
        FeedbackModuleComponent,
        LabelsModuleComponent,
        MachineLearningModuleComponent,
        CollapseComponent,
        CollapseButtonComponent,
        CommentsComponent,
        FeedbackMenuComponent,
        LabelsAutocompleteComponent,
        RenameLabelComponent,
        LabelsMenuComponent,
        DeleteLabelComponent,
        AddLabelComponent,
        EditLabelComponent,
        AnswerCardComponent,
        PassageListComponent,
        TopPassagesComponent,
        ComponentDemoComponent,
        MetadataModuleComponent,
        MetadataComponent,
        AdvancedModuleComponent,
        AlertsModuleComponent,
        AdvancedFormCheckboxComponent,
        AdvancedFormInputComponent,
        AdvancedFormRangeComponent,
        AdvancedFormSelectComponent,
        AdvancedFormMultiInputComponent,
        DatePickerComponent,
        DateRangePickerComponent,
        SelectComponent,
        EditAlertComponent,
        ManageAlertsComponent,
        AlertsMenuComponent,
        AutocompleteModuleComponent,
        AutocompleteListComponent,
        FieldSearchItemsComponent,
        ModalModuleComponent,
        ModalComponent,
        ModalHeaderComponent,
        ModalFooterComponent,
        LoginComponent,
        ConfirmComponent,
        HelpComponent,
        OverrideUserComponent,
        EditableComponent,
        PromptComponent,
        NotificationModuleComponent,
        NotificationsComponent,
        NotificationsManagerComponent,
        ResultsViewModuleComponent,
        ResultsViewSelectorComponent,
        ResultsGridViewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        WebServicesModule.forRoot(startConfig),
        BsFacetModule.forRoot(allFacets, defaultFacets),
        IntlModule.forRoot(AppLocalesConfig),
        BsSearchModule.forRoot(searchOptions),
        BsTimelineModule,
        ResultModule,
        BsSelectionModule,
        BsLabelsModule,
        BsActionModule,
        FormsModule,
        BsSearchModule,
        BsPreviewModule,
        BsModalModule,
        MetadataModule,
        CollapseModule,
        UtilsModule,
        BsAutocompleteModule,
        BsNotificationModule,
        BsBasketsModule,
        CommentsModule,
        BsFeedbackModule,
        MLModule,
        MetadataModule,
        BsAdvancedModule,
        BsAlertsModule,
        BsResultsViewModule.forRoot([resultsView], resultsView)
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: StartConfigInitializer, deps: [StartConfigWebService], multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: MODAL_MODEL, useValue: {} },
        { provide: ModalRef, useValue: {} },
        GlobalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
