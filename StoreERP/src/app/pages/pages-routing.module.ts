import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { SalesComponent } from '../sales/sales.component';
import { CashDrawerShiftsComponent } from '../sales/cash-drawer-shifts/cash-drawer-shifts.component';
import { OnlineOrdersComponent } from '../sales/online-orders/online-orders.component';
import { BulkOrdersComponent } from '../sales/bulk-orders/bulk-orders.component';
import { OrderRefundsComponent } from '../sales/order-refunds/order-refunds.component';
import { CustomerComponent } from '../customers/customer/customer.component';
import { CreditsComponent } from '../customers/credits/credits.component';
import { GroupsComponent } from '../customers/groups/groups.component';
import { ItemComponent } from '../items/item/item.component';
import { VariationsComponent } from '../items/variations/variations.component';
import { CategoriesComponent } from '../items/categories/categories.component';
import { DiscountsComponent } from '../items/discounts/discounts.component';
import { TaxesComponent } from '../items/taxes/taxes.component';
import { ChargesComponent } from '../items/charges/charges.component';
import { PriceCategoriesComponent } from '../items/price-categories/price-categories.component';
import { PrinterLabelsComponent } from '../items/printer-labels/printer-labels.component';
import { MerchantAttributeValuesComponent } from '../items/merchant-attribute-values/merchant-attribute-values.component';
import { TemplatesComponent } from '../notification/templates/templates.component';
import { CreditMerchantComponent } from '../credits/credit-merchant/credit-merchant.component';
import { ExportFileComponent } from '../downloads-export/export-file/export-file.component';
import { LoyaltyComponent } from '../loyalties/loyalty/loyalty.component';
import { ImportFileComponent } from '../upload-import/import-file/import-file.component';
import { EmployeeComponent } from '../employees/employee/employee.component';
import { RoleComponent } from '../employees/role/role.component';
import { ActivityComponent } from '../employees/activity/activity.component';
import { TutorialComponent } from '../accounts/tutorial/tutorial.component';
import { SalesSummaryComponent } from '../reports/sales-summary/sales-summary.component';
import { CmsComponent } from '../stores/cms/cms.component';
import { BannersComponent } from '../stores/banners/banners.component';
import { SettingsComponent } from '../stores/settings/settings.component';
import { AppGenerateComponent } from '../stores/app-generate/app-generate.component';
import { PaymentMethodsComponent } from '../reports/payment-methods/payment-methods.component';
import { ItemSalesComponent } from '../reports/item-sales/item-sales.component';
import { CategorySalesComponent } from '../reports/category-sales/category-sales.component';
import { EmployeeSalesComponent } from '../reports/employee-sales/employee-sales.component';
import { LocationSalesComponent } from '../reports/location-sales/location-sales.component';
import { CustomerSalesComponent } from '../reports/customer-sales/customer-sales.component';
import { CustomerItemsComponent } from '../reports/customer-items/customer-items.component';
import { CustomerNoSalesComponent } from '../reports/customer-no-sales/customer-no-sales.component';
import { ReportTaxesComponent } from '../reports/report-taxes/report-taxes.component';
import { ItemPriceCategoryComponent } from '../reports/item-price-category/item-price-category.component';
import { ReportChargesComponent } from '../reports/report-charges/report-charges.component';
import { IngredientSalesComponent } from '../reports/ingredient-sales/ingredient-sales.component';
import { FoodRecipeComponent } from '../reports/food-recipe/food-recipe.component';
import { KotItemsComponent } from '../reports/kot-items/kot-items.component';
import { ComboSalesComponent } from '../reports/combo-sales/combo-sales.component';
import { InventoryStockComponent } from '../inventory/inventory-stock/inventory-stock.component';
import { PurchaseOrderComponent } from '../inventory/purchase-order/purchase-order.component';
import { TransferComponent } from '../inventory/transfer/transfer.component';
import { GrnComponent } from '../inventory/grn/grn.component';
import { StockAdjustComponent } from '../inventory/stock-adjust/stock-adjust.component';
import { IndentManagementComponent } from '../inventory/indent-management/indent-management.component';
import { IndentConsolidationComponent } from '../inventory/indent-consolidation/indent-consolidation.component';
import { VendorReturnComponent } from '../inventory/vendor-return/vendor-return.component';
import { PurchaseOrdersSummaryComponent } from '../inventory/purchase-orders-summary/purchase-orders-summary.component';
import { InventoryHistoryComponent } from '../inventory/inventory-history/inventory-history.component';
import { VendorsCreditsComponent } from '../inventory/vendors-credits/vendors-credits.component';
import { InventoryVendorsComponent } from '../inventory/inventory-vendors/inventory-vendors.component';
import { CostOfGoodsComponent } from '../inventory/cost-of-goods/cost-of-goods.component';
import { PriceChangeComponent } from '../inventory/price-change/price-change.component';
import { ReportStockComponent } from '../inventory/report-stock/report-stock.component';
import { ReportItemSalesComponent } from '../inventory/report-item-sales/report-item-sales.component';
import { ReportTransferItemsComponent } from '../inventory/report-transfer-items/report-transfer-items.component';
import { ReportStockAdjustItemsComponent } from '../inventory/report-stock-adjust-items/report-stock-adjust-items.component';
import { ReportReturnItemComponent } from '../inventory/report-return-item/report-return-item.component';
import { ReportStockValuationComponent } from '../inventory/report-stock-valuation/report-stock-valuation.component';
import { EditProfileComponent } from '../accounts/edit-profile/edit-profile.component';
import { LocationsComponent } from '../accounts/locations/locations.component';
import { DevicesComponent } from '../accounts/devices/devices.component';
import { LicencesComponent } from '../accounts/licences/licences.component';
import { ChangePasswordComponent } from '../accounts/change-password/change-password.component';
import { AccountSettingsComponent } from '../accounts/account-settings/account-settings.component';
import { SubscriptionsComponent } from '../accounts/subscriptions/subscriptions.component';
import { ApiKeysComponent } from '../accounts/api-keys/api-keys.component';
import { DeleteComponent } from '../accounts/delete/delete.component';
import { DevicesRenewComponent } from '../accounts/devices-renew/devices-renew.component';
import { MerchantPaymentMethodsComponent } from '../accounts/merchant-payment-methods/merchant-payment-methods.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'pages/dashboard',
      component: ECommerceComponent,
    },
   
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'pages/home',
      component: HomeComponent,
    },
    {
      path: 'employees/employee',
      component: EmployeeComponent,
    },
    {
      path: 'pages/employees/employee',
      component: EmployeeComponent,
    },
    {
      path: 'employees/role',
      component: RoleComponent,
    },
    {
      path: 'pages/employees/role',
      component: RoleComponent,
    },
    {
      path: 'employees/activity',
      component: ActivityComponent,
    },
    {
      path: 'pages/employees/activity',
      component: ActivityComponent,
    },
    {
      path: 'sales',
      component: SalesComponent,
    },
    {
      path: 'pages/sales',
      component: SalesComponent,
    },
    {
      path: 'sales/cash-drawer-shifts',
      component: CashDrawerShiftsComponent,
    },
    {
      path: 'pages/sales/cash-drawer-shifts',
      component: CashDrawerShiftsComponent,
    },
    {
      path: 'sales/cash-drawer-shifts/:id',
      component: CashDrawerShiftsComponent,
    },
    {
      path: 'pages/sales/cash-drawer-shifts/:id',
      component: CashDrawerShiftsComponent,
    },
    {
      path: 'sales/online-orders',
      component: OnlineOrdersComponent,
    },
    {
      path: 'pages/sales/online-orders',
      component: OnlineOrdersComponent,
    },
    {
      path: 'sales/bulk-orders',
      component: BulkOrdersComponent,
    },
    {
      path: 'pages/sales/bulk-orders',
      component: BulkOrdersComponent,
    },
    {
      path: 'sales/order-refunds',
      component: OrderRefundsComponent,
    },
    {
      path: 'pages/sales/order-refunds',
      component: OrderRefundsComponent,
    },
    {
      path: 'customers/customer',
      component: CustomerComponent,
    },
    {
      path: 'pages/customers/customer',
      component: CustomerComponent,
    },
    {
      path: 'customers/customer/:id',
      component: CustomerComponent,
    },
    {
      path: 'pages/customers/customer/:id',
      component: CustomerComponent,
    },
    {
      path: 'customers/credits',
      component: CreditsComponent
    },
    {
      path: 'pages/customers/credits',
      component: CreditsComponent
    },
    {
      path: 'customers/groups',
      component: GroupsComponent,
    },
    {
      path: 'pages/customers/groups',
      component: GroupsComponent,
    },
    {
      path: 'customers/groups/:id',
      component: GroupsComponent,
    },
    {
      path: 'pages/customers/groups/:id',
      component: GroupsComponent,
    },
    {
      path: 'items/item',
      component: ItemComponent,
    },
    {
      path: 'pages/items/item',
      component: ItemComponent,
    },
    {
      path: 'items/variations',
      component: VariationsComponent,
    },
    {
      path: 'pages/items/variations',
      component: VariationsComponent,
    },
    {
      path: 'items/categories',
      component: CategoriesComponent,
    },
    {
      path: 'pages/items/categories',
      component: CategoriesComponent,
    },
    {
      path: 'items/discounts',
      component: DiscountsComponent,
    },
    {
      path: 'pages/items/discounts',
      component: DiscountsComponent,
    },
    {
      path: 'items/taxes',
      component: TaxesComponent,
    },
    {
      path: 'pages/items/taxes',
      component: TaxesComponent,
    },
    {
      path: 'items/charges',
      component: ChargesComponent,
    },
    {
      path: 'pages/items/charges',
      component: ChargesComponent,
    },
    {
      path: 'items/price-categories',
      component: PriceCategoriesComponent,
    },
    {
      path: 'pages/items/price-categories',
      component: PriceCategoriesComponent,
    },
    {
      path: 'items/printer-labels',
      component: PrinterLabelsComponent,
    },
    {
      path: 'pages/items/printer-labels',
      component: PrinterLabelsComponent,
    },
    {
      path: 'items/merchant-attribute-values',
      component: MerchantAttributeValuesComponent,
    },
    {
      path: 'pages/items/merchant-attribute-values',
      component: MerchantAttributeValuesComponent,
    },
    {
      path: 'notification/templates',
      component: TemplatesComponent,
    },
    {
      path: 'pages/notification/templates',
      component: TemplatesComponent,
    },
    {
      path: 'credits/credit-merchant',
      component: CreditMerchantComponent,
    },
    {
      path: 'pages/credits/credit-merchant',
      component: CreditMerchantComponent,
    },
    {
      path: 'downloads-export/export-file',
      component: ExportFileComponent,
    },
    {
      path: 'pages/downloads-export/export-file',
      component: ExportFileComponent,
    },

    {
      path: 'loyalties/loyalty',
      component: LoyaltyComponent,
    },
    {
      path: 'pages/loyalties/loyalty',
      component: LoyaltyComponent,
    },

    {
      path: 'upload-import/import-file',
      component: ImportFileComponent,
    },
    {
      path: 'pages/upload-import/import-file',
      component: ImportFileComponent,
    },
  
    {
      path: 'pages/accounts/tutorial',
      component: TutorialComponent,
    },


    {
      path: 'reports/sales-summary',
      component: SalesSummaryComponent,
    },

    { 
      path: 'reports/payment-methods',
      component: PaymentMethodsComponent,
    },

    {
      path: 'reports/item-sales',
      component: ItemSalesComponent,
    },

    {
      path: 'reports/item-sales',
      component: ItemSalesComponent,
    },

    {
      path: 'reports/category-sales',
      component: CategorySalesComponent,
    },
    {
      path: 'reports/employee-sales',
      component: EmployeeSalesComponent,
    },
    {
      path: 'reports/location-sales',
      component: LocationSalesComponent,
    },

    {
      path: 'reports/customer-sales',
      component: CustomerSalesComponent,
    },
    {
      path: 'reports/customer-items',
      component: CustomerItemsComponent,
    },
    {
      path: 'reports/customer-no-sales',
      component: CustomerNoSalesComponent,
    },
    {
      path: 'reports/report-taxes',
      component: ReportTaxesComponent,
    },
    {
      path: 'reports/combo-sales',
      component: ComboSalesComponent,
    },
    {
      path: 'reports/item-price-category',
      component: ItemPriceCategoryComponent,
    },
    
    {
      path: 'reports/report-charges',
      component: ReportChargesComponent,
    },

    {
      path: 'reports/ingredient-sales',
      component: IngredientSalesComponent,
    },
    {
      path: 'reports/food-recipe',
      component: FoodRecipeComponent,
    },
    {
      path: 'reports/kot-items',
      component: KotItemsComponent,
    },
    
    {
      path: 'inventory/inventory-stock',
      component: InventoryStockComponent,
    },

    {
      path: 'inventory/purchase-order',
      component: PurchaseOrderComponent,
    },
    {
      path: 'inventory/transfer',
      component: TransferComponent,
    },
    {
      path: 'inventory/grn',
      component: GrnComponent,
    },
    {
      path: 'inventory/stock-adjust',
      component: StockAdjustComponent,
    },
    {
      path: 'inventory/indent-management',
      component: IndentManagementComponent,
    },
    {
      path: 'inventory/indent-consolidation',
      component: IndentConsolidationComponent,
    },
    {
      path: 'inventory/vendor-return',
      component: VendorReturnComponent,
    },
    {
      path: 'inventory/purchase-orders-summary',
      component: PurchaseOrdersSummaryComponent,
    },
      
    {
      path: 'inventory/price-change',
      component: PriceChangeComponent,
    },

    {
      path: 'inventory/cost-of-goods',
      component: CostOfGoodsComponent,
    },

    {
      path: 'inventory/report-stock',
      component: ReportStockComponent,
    },
    {
      path: 'inventory/report-item-sales',
      component: ReportItemSalesComponent,
    },
    {
      path: 'inventory/report-transfer-items',
      component: ReportTransferItemsComponent,
    },
    {
      path: 'inventory/report-stock-adjust-items',
      component: ReportStockAdjustItemsComponent,
    },
    {
      path: 'inventory/report-return-item',
      component: ReportReturnItemComponent,
    },

    {
      path: 'inventory/report-stock-valuation',
      component: ReportStockValuationComponent,
    },
        
    {
      path: 'inventory/vendors-credits',
      component: VendorsCreditsComponent,
    },
    
    {
      path: 'inventory/inventory-vendors',
      component: InventoryVendorsComponent,
    },

    {
      path: 'inventory/inventory-history',
      component: InventoryHistoryComponent,
    },

    {
      path: 'stores/cms',
      component: CmsComponent,
    },
    {
      path: 'stores/banners',
      component: BannersComponent,
    },

    {
      path: 'stores/settings',
      component: SettingsComponent,
    },

    {
      path: 'stores/app-generate',
      component: AppGenerateComponent,
    },

    {
      path: 'accounts/tutorial',
      component: TutorialComponent,
    },
    {
      path: 'accounts/edit-profile',
      component: EditProfileComponent,
    },
    {
      path: 'accounts/locations',
      component: LocationsComponent,
    },
    {
      path: 'accounts/devices',
      component: DevicesComponent,
    },
    {
      path: 'accounts/licences',
      component: LicencesComponent,
    },
    {
      path: 'accounts/change-password',
      component: ChangePasswordComponent,
    },
    {
      path: 'accounts/account-settings',
      component: AccountSettingsComponent,
    },
    {
      path: 'accounts/merchant-payment-methods',
      component: MerchantPaymentMethodsComponent,
    },
    {
      path: 'accounts/delete',
      component: DeleteComponent,
    },
    {
      path: 'accounts/subscriptions',
      component: SubscriptionsComponent,
    },
    {
      path: 'accounts/api-keys',
      component: ApiKeysComponent,
    },
    {
      path: 'accounts/devices-renew',
      component: DevicesRenewComponent,
    },
    
   
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
