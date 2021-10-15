/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { CashDrawerShiftsComponent } from './sales/cash-drawer-shifts/cash-drawer-shifts.component';
import { OnlineOrdersComponent } from './sales/online-orders/online-orders.component';
import { BulkOrdersComponent } from './sales/bulk-orders/bulk-orders.component';
import { OrderRefundsComponent } from './sales/order-refunds/order-refunds.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CreditsComponent } from './customers/credits/credits.component';
import { GroupsComponent } from './customers/groups/groups.component';
import { ItemComponent } from './items/item/item.component';
import { VariationsComponent } from './items/variations/variations.component';
import { CategoriesComponent } from './items/categories/categories.component';
import { DiscountsComponent } from './items/discounts/discounts.component';
import { TaxesComponent } from './items/taxes/taxes.component';
import { ChargesComponent } from './items/charges/charges.component';
import { PriceCategoriesComponent } from './items/price-categories/price-categories.component';
import { PrinterLabelsComponent } from './items/printer-labels/printer-labels.component';
import { MerchantAttributeValuesComponent } from './items/merchant-attribute-values/merchant-attribute-values.component';
import { TemplatesComponent } from './notification/templates/templates.component';
import { CreditMerchantComponent } from './credits/credit-merchant/credit-merchant.component';
import { ExportFileComponent } from './downloads-export/export-file/export-file.component';
import { LoyaltyComponent } from './loyalties/loyalty/loyalty.component';
import { ImportFileComponent } from './upload-import/import-file/import-file.component';
import { RoleComponent } from './employees/role/role.component';
import { ActivityComponent } from './employees/activity/activity.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { TutorialComponent } from './accounts/tutorial/tutorial.component';
import { SalesSummaryComponent } from './reports/sales-summary/sales-summary.component';
import { PaymentMethodsComponent } from './reports/payment-methods/payment-methods.component';
import { ItemSalesComponent } from './reports/item-sales/item-sales.component';
import { CategorySalesComponent } from './reports/category-sales/category-sales.component';
import { EmployeeSalesComponent } from './reports/employee-sales/employee-sales.component';
import { LocationSalesComponent } from './reports/location-sales/location-sales.component';
import { CustomerSalesComponent } from './reports/customer-sales/customer-sales.component';
import { CustomerItemsComponent } from './reports/customer-items/customer-items.component';
import { CustomerNoSalesComponent } from './reports/customer-no-sales/customer-no-sales.component';
import { ReportTaxesComponent } from './reports/report-taxes/report-taxes.component';
import { ComboSalesComponent } from './reports/combo-sales/combo-sales.component';
import { ItemPriceCategoryComponent } from './reports/item-price-category/item-price-category.component';
import { ReportChargesComponent } from './reports/report-charges/report-charges.component';
import { IngredientSalesComponent } from './reports/ingredient-sales/ingredient-sales.component';
import { FoodRecipeComponent } from './reports/food-recipe/food-recipe.component';
import { KotItemsComponent } from './reports/kot-items/kot-items.component';
import { CmsComponent } from './stores/cms/cms.component';
import { BannersComponent } from './stores/banners/banners.component';
import { SettingsComponent } from './stores/settings/settings.component';
import { AppGenerateComponent } from './stores/app-generate/app-generate.component';
import { InventoryStockComponent } from './inventory/inventory-stock/inventory-stock.component';
import { PurchaseOrderComponent } from './inventory/purchase-order/purchase-order.component';
import { TransferComponent } from './inventory/transfer/transfer.component';
import { GrnComponent } from './inventory/grn/grn.component';
import { StockAdjustComponent } from './inventory/stock-adjust/stock-adjust.component';
import { IndentManagementComponent } from './inventory/indent-management/indent-management.component';
import { IndentConsolidationComponent } from './inventory/indent-consolidation/indent-consolidation.component';
import { VendorReturnComponent } from './inventory/vendor-return/vendor-return.component';
import { PurchaseOrdersSummaryComponent } from './inventory/purchase-orders-summary/purchase-orders-summary.component';
import { InventoryHistoryComponent } from './inventory/inventory-history/inventory-history.component';
import { VendorsCreditsComponent } from './inventory/vendors-credits/vendors-credits.component';
import { InventoryVendorsComponent } from './inventory/inventory-vendors/inventory-vendors.component';
import { CostOfGoodsComponent } from './inventory/cost-of-goods/cost-of-goods.component';
import { PriceChangeComponent } from './inventory/price-change/price-change.component';
import { ReportStockComponent } from './inventory/report-stock/report-stock.component';
import { ReportItemSalesComponent } from './inventory/report-item-sales/report-item-sales.component';
import { ReportTransferItemsComponent } from './inventory/report-transfer-items/report-transfer-items.component';
import { ReportStockAdjustItemsComponent } from './inventory/report-stock-adjust-items/report-stock-adjust-items.component';
import { ReportReturnItemComponent } from './inventory/report-return-item/report-return-item.component';
import { ReportStockValuationComponent } from './inventory/report-stock-valuation/report-stock-valuation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from './accounts/edit-profile/edit-profile.component';
import { LocationsComponent } from './accounts/locations/locations.component';
import { DevicesComponent } from './accounts/devices/devices.component';
import { LicencesComponent } from './accounts/licences/licences.component';
import { ChangePasswordComponent } from './accounts/change-password/change-password.component';
import { MerchantPaymentMethodsComponent } from './accounts/merchant-payment-methods/merchant-payment-methods.component';
import { DeleteComponent } from './accounts/delete/delete.component';
import { SubscriptionsComponent } from './accounts/subscriptions/subscriptions.component';
import { ApiKeysComponent } from './accounts/api-keys/api-keys.component';
import { AccountSettingsComponent } from './accounts/account-settings/account-settings.component';
import { DevicesRenewComponent } from './accounts/devices-renew/devices-renew.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NbChatModule, NbDatepickerModule, NbDialogModule, NbMenuModule, 
  NbSidebarModule,  NbToastrModule,  NbWindowModule,} from '@nebular/theme';


@NgModule({
  declarations: [
      AppComponent,
      
      HomeComponent, 
      SalesComponent, 
      CashDrawerShiftsComponent, 
      OnlineOrdersComponent, 
      BulkOrdersComponent, 
      OrderRefundsComponent, 
      CustomerComponent,
      CreditsComponent,
      GroupsComponent,
      ItemComponent,
      VariationsComponent,
      CategoriesComponent,
      DiscountsComponent,
      TaxesComponent,
      ChargesComponent,
      PriceCategoriesComponent,
      PrinterLabelsComponent,
      MerchantAttributeValuesComponent,
      TemplatesComponent,
      CreditMerchantComponent,
      ExportFileComponent,
      LoyaltyComponent,
      ImportFileComponent,
      RoleComponent,
      ActivityComponent,
      EmployeeComponent,
      TutorialComponent,
      SalesSummaryComponent,
      PaymentMethodsComponent,
      ItemSalesComponent,
      CategorySalesComponent,
      EmployeeSalesComponent,
      LocationSalesComponent,
      CustomerSalesComponent,
      CustomerItemsComponent,
      CustomerNoSalesComponent,
      ReportTaxesComponent,
      ComboSalesComponent,
      ItemPriceCategoryComponent,
      ReportChargesComponent,
      IngredientSalesComponent,
      FoodRecipeComponent,
      KotItemsComponent,
      CmsComponent,
      BannersComponent,
      SettingsComponent,
      AppGenerateComponent,
      InventoryStockComponent,
      PurchaseOrderComponent,
      TransferComponent,
      GrnComponent,
      StockAdjustComponent,
      IndentManagementComponent,
      IndentConsolidationComponent,
      VendorReturnComponent,
      PurchaseOrdersSummaryComponent,
      InventoryHistoryComponent,
      VendorsCreditsComponent,
      InventoryVendorsComponent,
      CostOfGoodsComponent,
      PriceChangeComponent,
      ReportStockComponent,
      ReportItemSalesComponent,
      ReportTransferItemsComponent,
      ReportStockAdjustItemsComponent,
      ReportReturnItemComponent,
      ReportStockValuationComponent,
      EditProfileComponent,
      LocationsComponent,
      DevicesComponent,
      LicencesComponent,
      ChangePasswordComponent,
      MerchantPaymentMethodsComponent,
      DeleteComponent,
      SubscriptionsComponent,
      ApiKeysComponent,
      AccountSettingsComponent,
      DevicesRenewComponent
    ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
