define("ViewModels/MainViewModel", ["require", "exports"], function (require, exports) {
    "use strict";
    var MainViewModel = (function () {
        function MainViewModel() {
            this.RootViewModels = ko.observableArray([
                {
                    label: "Спестовни", value: [
                        { label: "S8", value: "S8" },
                        { label: "VM1", value: "VM1" }
                    ]
                },
                {
                    label: "Детски", value: [
                        { label: "D1", value: "D1" }
                    ]
                }
            ]);
            this.SecontViewModels = ko.observableArray([]);
            this.SelectedViewName = ko.observable("");
            this.SecontViewModels(this.RootViewModels()[0].value);
            this.SelectedViewName(this.SecontViewModels()[0].value);
        }
        return MainViewModel;
    }());
    return MainViewModel;
});
define("Locators/ServiceLocator", ["require", "exports"], function (require, exports) {
    "use strict";
    var config = { webapiBase: "http://localhost:15355/" };
    var ServiceLocator = (function () {
        function ServiceLocator() {
        }
        return ServiceLocator;
    }());
    ServiceLocator.Config = {};
    return ServiceLocator;
});
define("app", ["require", "exports", "ViewModels/MainViewModel", "Locators/ServiceLocator"], function (require, exports, MainViewModel, ServiceLocator) {
    "use strict";
    console.log(ServiceLocator.Config);
    ko.components.register('D1', {
        viewModel: { require: 'ViewModels/D1ViewModel' },
        template: { require: 'text!templates/D1.html' }
    });
    ko.components.register('VM1', {
        viewModel: { require: 'ViewModels/VM1ViewModel' },
        template: { require: 'text!templates/VM1.html' }
    });
    ko.components.register('S8', {
        viewModel: { require: 'ViewModels/S8ViewModel' },
        template: { require: 'text!templates/S8.html' }
    });
    ko.applyBindings(new MainViewModel());
});
define("models/Enums", ["require", "exports"], function (require, exports) {
    "use strict";
    var Tables;
    (function (Tables) {
        Tables[Tables["VM1"] = 0] = "VM1";
        Tables[Tables["VM1Profit"] = 1] = "VM1Profit";
        Tables[Tables["VM1SurrenderValue"] = 2] = "VM1SurrenderValue";
        Tables[Tables["S8"] = 3] = "S8";
        Tables[Tables["S8Profit"] = 4] = "S8Profit";
        Tables[Tables["S8DynamicaSurrenderValue"] = 5] = "S8DynamicaSurrenderValue";
        Tables[Tables["S8Bonus5PlusSurrenderValue"] = 6] = "S8Bonus5PlusSurrenderValue";
        Tables[Tables["D1"] = 7] = "D1";
        Tables[Tables["D1Profit"] = 8] = "D1Profit";
        Tables[Tables["D1SurrenderValue"] = 9] = "D1SurrenderValue";
        Tables[Tables["ClauseA"] = 10] = "ClauseA";
        Tables[Tables["ClauseB"] = 11] = "ClauseB";
        Tables[Tables["ClauseC1"] = 12] = "ClauseC1";
        Tables[Tables["ClauseC2"] = 13] = "ClauseC2";
        Tables[Tables["ClauseK"] = 14] = "ClauseK";
        Tables[Tables["ClauseE"] = 15] = "ClauseE";
        Tables[Tables["ClauseD"] = 16] = "ClauseD";
        Tables[Tables["ClauseG1"] = 17] = "ClauseG1";
        Tables[Tables["ClauseG2"] = 18] = "ClauseG2";
        Tables[Tables["ClauseT1"] = 19] = "ClauseT1";
        Tables[Tables["ClauseT2"] = 20] = "ClauseT2";
    })(Tables = exports.Tables || (exports.Tables = {}));
    var BoundaryTypes;
    (function (BoundaryTypes) {
        BoundaryTypes[BoundaryTypes["Max"] = 0] = "Max";
        BoundaryTypes[BoundaryTypes["Min"] = 1] = "Min";
    })(BoundaryTypes = exports.BoundaryTypes || (exports.BoundaryTypes = {}));
    var BoundaryFields;
    (function (BoundaryFields) {
        BoundaryFields[BoundaryFields["Age"] = 0] = "Age";
        BoundaryFields[BoundaryFields["InsuranceTerm"] = 1] = "InsuranceTerm";
    })(BoundaryFields = exports.BoundaryFields || (exports.BoundaryFields = {}));
    var ProfitFields;
    (function (ProfitFields) {
        ProfitFields[ProfitFields["AnnualInterest"] = 0] = "AnnualInterest";
    })(ProfitFields = exports.ProfitFields || (exports.ProfitFields = {}));
    var CalculationTypes;
    (function (CalculationTypes) {
        CalculationTypes[CalculationTypes["InsuranceAmount"] = 0] = "InsuranceAmount";
        CalculationTypes[CalculationTypes["AnnualPremium"] = 1] = "AnnualPremium";
        CalculationTypes[CalculationTypes["BiannualPremium"] = 2] = "BiannualPremium";
        CalculationTypes[CalculationTypes["QuarterlyPremium"] = 3] = "QuarterlyPremium";
        CalculationTypes[CalculationTypes["MonthlyPremium"] = 4] = "MonthlyPremium";
    })(CalculationTypes = exports.CalculationTypes || (exports.CalculationTypes = {}));
    var ProfitTypes;
    (function (ProfitTypes) {
        ProfitTypes[ProfitTypes["AnnualProfit"] = 0] = "AnnualProfit";
        ProfitTypes[ProfitTypes["BiannualProfit"] = 1] = "BiannualProfit";
        ProfitTypes[ProfitTypes["QuarterlyProfit"] = 2] = "QuarterlyProfit";
        ProfitTypes[ProfitTypes["MonthlyProfit"] = 3] = "MonthlyProfit";
    })(ProfitTypes = exports.ProfitTypes || (exports.ProfitTypes = {}));
    var AdditionalClausesPremiumTypes;
    (function (AdditionalClausesPremiumTypes) {
        AdditionalClausesPremiumTypes[AdditionalClausesPremiumTypes["AnnualPremium"] = 0] = "AnnualPremium";
        AdditionalClausesPremiumTypes[AdditionalClausesPremiumTypes["BiannualPremium"] = 1] = "BiannualPremium";
        AdditionalClausesPremiumTypes[AdditionalClausesPremiumTypes["QuarterlyPremium"] = 2] = "QuarterlyPremium";
        AdditionalClausesPremiumTypes[AdditionalClausesPremiumTypes["MonthlyPremium"] = 3] = "MonthlyPremium";
    })(AdditionalClausesPremiumTypes = exports.AdditionalClausesPremiumTypes || (exports.AdditionalClausesPremiumTypes = {}));
    var InsuranceTypes;
    (function (InsuranceTypes) {
        InsuranceTypes[InsuranceTypes["VM1"] = 0] = "VM1";
        InsuranceTypes[InsuranceTypes["S8"] = 1] = "S8";
        InsuranceTypes[InsuranceTypes["D1"] = 2] = "D1";
    })(InsuranceTypes = exports.InsuranceTypes || (exports.InsuranceTypes = {}));
    var Currencies;
    (function (Currencies) {
        Currencies[Currencies["BGN"] = 0] = "BGN";
        Currencies[Currencies["EUR"] = 1] = "EUR";
    })(Currencies = exports.Currencies || (exports.Currencies = {}));
});
define("models/Insurance", ["require", "exports"], function (require, exports) {
    "use strict";
    var Insurance = (function () {
        function Insurance() {
        }
        Object.defineProperty(Insurance.prototype, "InsuranceType", {
            get: function () {
                return this.insuranceType;
            },
            set: function (value) {
                this.insuranceType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "Age", {
            get: function () {
                return this.age;
            },
            set: function (value) {
                this.age = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "InsuranceTerm", {
            get: function () {
                return this.insuranceTerm;
            },
            set: function (value) {
                this.insuranceTerm = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "InsuranceAmount", {
            get: function () {
                return this.insuranceAmount;
            },
            set: function (value) {
                this.insuranceAmount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "AnnualPremium", {
            get: function () {
                return this.annualPremium;
            },
            set: function (value) {
                this.annualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "BiannualPremium", {
            get: function () {
                return this.biannualPremium;
            },
            set: function (value) {
                this.biannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "QuarterlyPremium", {
            get: function () {
                return this.quarterlyPremium;
            },
            set: function (value) {
                this.quarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "MonthlyPremium", {
            get: function () {
                return this.monthlyPremium;
            },
            set: function (value) {
                this.monthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "AnnualEnsureFund", {
            get: function () {
                return this.annualEnsureFund;
            },
            set: function (value) {
                this.annualEnsureFund = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "BiannualEnsureFund", {
            get: function () {
                return this.biannualEnsureFund;
            },
            set: function (value) {
                this.biannualEnsureFund = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "QuarterlyEnsureFund", {
            get: function () {
                return this.quarterlyEnsureFund;
            },
            set: function (value) {
                this.quarterlyEnsureFund = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "MonthlyEnsureFund", {
            get: function () {
                return this.monthlyEnsureFund;
            },
            set: function (value) {
                this.monthlyEnsureFund = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "AnnualProfit", {
            get: function () {
                return this.annualProfit;
            },
            set: function (value) {
                this.annualProfit = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "BiannualProfit", {
            get: function () {
                return this.biannualProfit;
            },
            set: function (value) {
                this.biannualProfit = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "QuarterlyProfit", {
            get: function () {
                return this.quarterlyProfit;
            },
            set: function (value) {
                this.quarterlyProfit = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "MonthlyProfit", {
            get: function () {
                return this.monthlyProfit;
            },
            set: function (value) {
                this.monthlyProfit = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseAAmount", {
            get: function () {
                return this.clauseAAmount;
            },
            set: function (value) {
                this.clauseAAmount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseAAnnualPremium", {
            get: function () {
                return this.clauseAAnnualPremium;
            },
            set: function (value) {
                this.clauseAAnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseABiannualPremium", {
            get: function () {
                return this.clauseABiannualPremium;
            },
            set: function (value) {
                this.clauseABiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseAQuarterlyPremium", {
            get: function () {
                return this.clauseAQuarterlyPremium;
            },
            set: function (value) {
                this.clauseAQuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseAMonthlyPremium", {
            get: function () {
                return this.clauseAMonthlyPremium;
            },
            set: function (value) {
                this.clauseAMonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseBAmount", {
            get: function () {
                return this.clauseBAmount;
            },
            set: function (value) {
                this.clauseBAmount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseBAnnualPremium", {
            get: function () {
                return this.clauseBAnnualPremium;
            },
            set: function (value) {
                this.clauseBAnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseBBiannualPremium", {
            get: function () {
                return this.clauseBBiannualPremium;
            },
            set: function (value) {
                this.clauseBBiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseBQuarterlyPremium", {
            get: function () {
                return this.clauseBQuarterlyPremium;
            },
            set: function (value) {
                this.clauseBQuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseBMonthlyPremium", {
            get: function () {
                return this.clauseBMonthlyPremium;
            },
            set: function (value) {
                this.clauseBMonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC1Amount", {
            get: function () {
                return this.clauseC1Amount;
            },
            set: function (value) {
                this.clauseC1Amount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC1AnnualPremium", {
            get: function () {
                return this.clauseC1AnnualPremium;
            },
            set: function (value) {
                this.clauseC1AnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC1BiannualPremium", {
            get: function () {
                return this.clauseC1BiannualPremium;
            },
            set: function (value) {
                this.clauseC1BiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC1QuarterlyPremium", {
            get: function () {
                return this.clauseC1QuarterlyPremium;
            },
            set: function (value) {
                this.clauseC1QuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC1MonthlyPremium", {
            get: function () {
                return this.clauseC1MonthlyPremium;
            },
            set: function (value) {
                this.clauseC1MonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC2Amount", {
            get: function () {
                return this.clauseC2Amount;
            },
            set: function (value) {
                this.clauseC2Amount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC2AnnualPremium", {
            get: function () {
                return this.clauseC2AnnualPremium;
            },
            set: function (value) {
                this.clauseC2AnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC2BiannualPremium", {
            get: function () {
                return this.clauseC2BiannualPremium;
            },
            set: function (value) {
                this.clauseC2BiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC2QuarterlyPremium", {
            get: function () {
                return this.clauseC2QuarterlyPremium;
            },
            set: function (value) {
                this.clauseC2QuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseC2MonthlyPremium", {
            get: function () {
                return this.clauseC2MonthlyPremium;
            },
            set: function (value) {
                this.clauseC2MonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseKAmount", {
            get: function () {
                return this.clauseKAmount;
            },
            set: function (value) {
                this.clauseKAmount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseKAnnualPremium", {
            get: function () {
                return this.clauseKAnnualPremium;
            },
            set: function (value) {
                this.clauseKAnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseKBiannualPremium", {
            get: function () {
                return this.clauseKBiannualPremium;
            },
            set: function (value) {
                this.clauseKBiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseKQuarterlyPremium", {
            get: function () {
                return this.clauseKQuarterlyPremium;
            },
            set: function (value) {
                this.clauseKQuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseKMonthlyPremium", {
            get: function () {
                return this.clauseKMonthlyPremium;
            },
            set: function (value) {
                this.clauseKMonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "UseClauseE", {
            get: function () {
                return this.useClauseE;
            },
            set: function (value) {
                this.useClauseE = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseEAnnualPremium", {
            get: function () {
                return this.clauseEAnnualPremium;
            },
            set: function (value) {
                this.clauseEAnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseEBiannualPremium", {
            get: function () {
                return this.clauseEBiannualPremium;
            },
            set: function (value) {
                this.clauseEBiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseEQuarterlyPremium", {
            get: function () {
                return this.clauseEQuarterlyPremium;
            },
            set: function (value) {
                this.clauseEQuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseEMonthlyPremium", {
            get: function () {
                return this.clauseEMonthlyPremium;
            },
            set: function (value) {
                this.clauseEMonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseDAge", {
            get: function () {
                return this.clauseDAge;
            },
            set: function (value) {
                this.clauseDAge = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseDAnnualPremium", {
            get: function () {
                return this.clauseDAnnualPremium;
            },
            set: function (value) {
                this.clauseDAnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseDBiannualPremium", {
            get: function () {
                return this.clauseDBiannualPremium;
            },
            set: function (value) {
                this.clauseDBiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseDQuarterlyPremium", {
            get: function () {
                return this.clauseDQuarterlyPremium;
            },
            set: function (value) {
                this.clauseDQuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseDMonthlyPremium", {
            get: function () {
                return this.clauseDMonthlyPremium;
            },
            set: function (value) {
                this.clauseDMonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG1Amount", {
            get: function () {
                return this.clauseG1Amount;
            },
            set: function (value) {
                this.clauseG1Amount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG1AnnualPremium", {
            get: function () {
                return this.clauseG1AnnualPremium;
            },
            set: function (value) {
                this.clauseG1AnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG1BiannualPremium", {
            get: function () {
                return this.clauseG1BiannualPremium;
            },
            set: function (value) {
                this.clauseG1BiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG1QuarterlyPremium", {
            get: function () {
                return this.clauseG1QuarterlyPremium;
            },
            set: function (value) {
                this.clauseG1QuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG1MonthlyPremium", {
            get: function () {
                return this.clauseG1MonthlyPremium;
            },
            set: function (value) {
                this.clauseG1MonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG2Amount", {
            get: function () {
                return this.clauseG2Amount;
            },
            set: function (value) {
                this.clauseG2Amount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG2AnnualPremium", {
            get: function () {
                return this.clauseG2AnnualPremium;
            },
            set: function (value) {
                this.clauseG2AnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG2BiannualPremium", {
            get: function () {
                return this.clauseG2BiannualPremium;
            },
            set: function (value) {
                this.clauseG2BiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG2QuarterlyPremium", {
            get: function () {
                return this.clauseG2QuarterlyPremium;
            },
            set: function (value) {
                this.clauseG2QuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseG2MonthlyPremium", {
            get: function () {
                return this.clauseG2MonthlyPremium;
            },
            set: function (value) {
                this.clauseG2MonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT1Amount", {
            get: function () {
                return this.clauseT1Amount;
            },
            set: function (value) {
                this.clauseT1Amount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT1AnnualPremium", {
            get: function () {
                return this.clauseT1AnnualPremium;
            },
            set: function (value) {
                this.clauseT1AnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT1BiannualPremium", {
            get: function () {
                return this.clauseT1BiannualPremium;
            },
            set: function (value) {
                this.clauseT1BiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT1QuarterlyPremium", {
            get: function () {
                return this.clauseT1QuarterlyPremium;
            },
            set: function (value) {
                this.clauseT1QuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT1MonthlyPremium", {
            get: function () {
                return this.clauseT1MonthlyPremium;
            },
            set: function (value) {
                this.clauseT1MonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT2Amount", {
            get: function () {
                return this.clauseT2Amount;
            },
            set: function (value) {
                this.clauseT2Amount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT2AnnualPremium", {
            get: function () {
                return this.clauseT2AnnualPremium;
            },
            set: function (value) {
                this.clauseT2AnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT2BiannualPremium", {
            get: function () {
                return this.clauseT2BiannualPremium;
            },
            set: function (value) {
                this.clauseT2BiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT2QuarterlyPremium", {
            get: function () {
                return this.clauseT2QuarterlyPremium;
            },
            set: function (value) {
                this.clauseT2QuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseT2MonthlyPremium", {
            get: function () {
                return this.clauseT2MonthlyPremium;
            },
            set: function (value) {
                this.clauseT2MonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "UseClauseSMO", {
            get: function () {
                return this.useClauseSMO;
            },
            set: function (value) {
                this.useClauseSMO = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseSMOAnnualPremium", {
            get: function () {
                return this.clauseSMOAnnualPremium;
            },
            set: function (value) {
                this.clauseSMOAnnualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseSMOBiannualPremium", {
            get: function () {
                return this.clauseSMOBiannualPremium;
            },
            set: function (value) {
                this.clauseSMOBiannualPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseSMOQuarterlyPremium", {
            get: function () {
                return this.clauseSMOQuarterlyPremium;
            },
            set: function (value) {
                this.clauseSMOQuarterlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Insurance.prototype, "ClauseSMOMonthlyPremium", {
            get: function () {
                return this.clauseSMOMonthlyPremium;
            },
            set: function (value) {
                this.clauseSMOMonthlyPremium = value;
            },
            enumerable: true,
            configurable: true
        });
        return Insurance;
    }());
    Insurance.INSURANCE_PREMIUM_AMOUNT = 1000;
    Insurance.MIN_INSURANCE_BGN_AMOUNT = 2000;
    Insurance.MIN_INSURANCE_EUR_AMOUNT = 1000;
    Insurance.ENSURE_FUND_ANNUAL_BGN_RATE = 1.00;
    Insurance.ENSURE_FUND_BIANNUAL_BGN_RATE = 0.5;
    Insurance.ENSURE_FUND_QUARTERLY_BGN_RATE = 0.25;
    Insurance.ENSURE_FUND_MONTHLY_BGN_RATE = 0.09;
    Insurance.ENSURE_FUND_ANNUAL_EUR_RATE = 0.52;
    Insurance.ENSURE_FUND_BIANNUAL_EUR_RATE = 0.26;
    Insurance.ENSURE_FUND_QUARTERLY_EUR_RATE = 0.13;
    Insurance.ENSURE_FUND_MONTHLY_EUR_RATE = 0.05;
    Insurance.CLAUSE_A_PREMIUM_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_A_INSURANCE_TERM_AGE = 75;
    Insurance.MIN_CLAUSE_A_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_A_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_A_COEFFICIENT = 3;
    Insurance.MAX_CLAUSE_A_BGN_AMOUNT = 200000;
    Insurance.MAX_CLAUSE_A_EUR_AMOUNT = 100000;
    Insurance.CLAUSE_B_PREMIUM_AMOUNT = 10;
    Insurance.MAX_CLAUSE_B_INSURANCE_TERM_AGE = 65;
    Insurance.MIN_CLAUSE_B_BGN_AMOUNT = 10;
    Insurance.MIN_CLAUSE_B_EUR_AMOUNT = 5;
    Insurance.MAX_CLAUSE_B_COEFFICIENT = 0.01;
    Insurance.MAX_CLAUSE_B_BGN_AMOUNT = 200;
    Insurance.MAX_CLAUSE_B_EUR_AMOUNT = 100;
    Insurance.CLAUSE_C1_PREMIUM_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_C1_INSURANCE_TERM_AGE = 65;
    Insurance.MIN_CLAUSE_C1_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_C1_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_C1_COEFFICIENT = 1;
    Insurance.MAX_CLAUSE_C1_BGN_AMOUNT = 20000;
    Insurance.MAX_CLAUSE_C1_EUR_AMOUNT = 10000;
    Insurance.CLAUSE_C2_PREMIUM_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_C2_INSURANCE_TERM_AGE = 65;
    Insurance.MIN_CLAUSE_C2_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_C2_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_C2_COEFFICIENT = 1;
    Insurance.MAX_CLAUSE_C2_BGN_AMOUNT = 20000;
    Insurance.MAX_CLAUSE_C2_EUR_AMOUNT = 10000;
    Insurance.CLAUSE_K_PREMIUM_AMOUNT = 1000;
    Insurance.MIN_CLAUSE_K_INSURANCE_AMOUNT = 5000;
    Insurance.MIN_CLAUSE_K_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_K_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_K_COEFFICIENT = 1;
    Insurance.MAX_CLAUSE_K_BGN_AMOUNT = 125000;
    Insurance.MAX_CLAUSE_K_EUR_AMOUNT = 62500;
    Insurance.CLAUSE_E_PREMIUM_AMOUNT = 100;
    Insurance.MIN_CLAUSE_E_AGE = 14;
    Insurance.MAX_CLAUSE_E_AGE = 74;
    Insurance.MAX_CLAUSE_E_INSURANCE_TERM_AGE = 75;
    Insurance.CLAUSE_D_PREMIUM_AMOUNT = 100;
    Insurance.CLAUSE_G1_PREMIUM_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_G1_INSURANCE_TERM_AGE = 65;
    Insurance.MIN_CLAUSE_G1_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_G1_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_G1_COEFFICIENT = 1;
    Insurance.MAX_CLAUSE_G1_BGN_AMOUNT = 20000;
    Insurance.MAX_CLAUSE_G1_EUR_AMOUNT = 10000;
    Insurance.CLAUSE_G2_PREMIUM_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_G2_INSURANCE_TERM_AGE = 65;
    Insurance.MIN_CLAUSE_G2_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_G2_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_G2_COEFFICIENT = 1;
    Insurance.MAX_CLAUSE_G2_BGN_AMOUNT = 20000;
    Insurance.MAX_CLAUSE_G2_EUR_AMOUNT = 10000;
    Insurance.CLAUSE_T1_PREMIUM_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_T1_INSURANCE_TERM_AGE = 70;
    Insurance.MIN_CLAUSE_T1_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_T1_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_T1_COEFFICIENT = 1;
    Insurance.MAX_CLAUSE_T1_BGN_AMOUNT = 100000;
    Insurance.MAX_CLAUSE_T1_EUR_AMOUNT = 50000;
    Insurance.CLAUSE_T2_PREMIUM_AMOUNT = 1000;
    Insurance.MIN_CLAUSE_T2_BGN_AMOUNT = 2000;
    Insurance.MIN_CLAUSE_T2_EUR_AMOUNT = 1000;
    Insurance.MAX_CLAUSE_T2_COEFFICIENT = 1;
    Insurance.MAX_CLAUSE_T2_BGN_AMOUNT = 100000;
    Insurance.MAX_CLAUSE_T2_EUR_AMOUNT = 50000;
    Insurance.CLAUSE_SMO_ANNUAL_BGN_AMOUNT = 15;
    Insurance.CLAUSE_SMO_BIANNUAL_BGN_AMOUNT = 7.65;
    Insurance.CLAUSE_SMO_QUARTERLY_BGN_AMOUNT = 3.86;
    Insurance.CLAUSE_SMO_MONTHLY_BGN_AMOUNT = 1.31;
    Insurance.CLAUSE_SMO_ANNUAL_EUR_AMOUNT = 7.50;
    Insurance.CLAUSE_SMO_BIANNUAL_EUR_AMOUNT = 3.83;
    Insurance.CLAUSE_SMO_QUARTERLY_EUR_AMOUNT = 1.93;
    Insurance.CLAUSE_SMO_MONTHLY_EUR_AMOUNT = 0.66;
    exports.Insurance = Insurance;
});
define("ViewModels/D1ViewModel", ["require", "exports"], function (require, exports) {
    "use strict";
    var D1ViewModel = (function () {
        function D1ViewModel() {
            this.hello = ko.observable("D1ViewModel");
        }
        return D1ViewModel;
    }());
    return D1ViewModel;
});
define("ViewModels/S8ViewModel", ["require", "exports"], function (require, exports) {
    "use strict";
    var S8ViewModel = (function () {
        function S8ViewModel() {
            this.hello = ko.observable("S8ViewModel");
        }
        return S8ViewModel;
    }());
    return S8ViewModel;
});
define("ViewModels/VM1ViewModel", ["require", "exports", "models/Insurance"], function (require, exports, Insurance_1) {
    "use strict";
    var VM1ViewModel = (function () {
        function VM1ViewModel() {
            this.hello = ko.observable("VM1ViewModel");
            this.CalculationType = ko.observable(null);
            this.InsuranceAmount = ko.observable(null);
            this.InsuranceAmountErrorDescription = ko.observable(null);
            this.AnnualPremium = ko.observable(null);
            this.AnnualPremiumErrorDescription = ko.observable(null);
            this.AnnualPremiumEnsureFund = ko.observable(null);
            this.BiannualPremium = ko.observable(null);
            this.BiannualPremiumErrorDescription = ko.observable(null);
            this.BiannualPremiumEnsureFund = ko.observable(null);
            this.QuarterlyPremium = ko.observable(null);
            this.QuarterlyPremiumErrorDescription = ko.observable(null);
            this.QuarterlyPremiumEnsureFund = ko.observable(null);
            this.MonthlyPremium = ko.observable(null);
            this.MonthlyPremiumErrorDescription = ko.observable(null);
            this.MonthlyPremiumEnsureFund = ko.observable(null);
            this.Age = ko.observable(null);
            this.AgeErrorDescription = ko.observable(null);
            this.InsuranceTerm = ko.observable(null);
            this.InsuranceTermErrorDescription = ko.observable(null);
            this.Currency = ko.observable(null);
            this.AnnualInterest = ko.observable(null);
            this.AnnualInterestErrorDescription = ko.observable(null);
            this.ProfessionRiskErrorDescription = ko.observable(null);
            this.ClauseA = ko.observable(null);
            this.ClauseAAmount = ko.observable(null);
            this.ClauseAErrorDescription = ko.observable(null);
            this.ClauseAWarningDescription = ko.observable(null);
            this.ClauseAPremium = ko.observable(null);
            this.ClauseB = ko.observable(null);
            this.ClauseBAmount = ko.observable(null);
            this.ClauseBErrorDescription = ko.observable(null);
            this.ClauseBWarningDescription = ko.observable(null);
            this.ClauseBPremium = ko.observable(null);
            this.ClauseC1 = ko.observable(null);
            this.ClauseC1Amount = ko.observable(null);
            this.ClauseC1ErrorDescription = ko.observable(null);
            this.ClauseC1WarningDescription = ko.observable(null);
            this.ClauseC1Premium = ko.observable(null);
            this.ClauseC2 = ko.observable(null);
            this.ClauseC2Amount = ko.observable(null);
            this.ClauseC2ErrorDescription = ko.observable(null);
            this.ClauseC2WarningDescription = ko.observable(null);
            this.ClauseC2Premium = ko.observable(null);
            this.ClauseK = ko.observable(null);
            this.ClauseKAmount = ko.observable(null);
            this.ClauseKErrorDescription = ko.observable(null);
            this.ClauseKPremium = ko.observable(null);
            this.ClauseE = ko.observable(null);
            this.ClauseEErrorDescription = ko.observable(null);
            this.ClauseEWarningDescription = ko.observable(null);
            this.ClauseEPremium = ko.observable(null);
            this.ClauseG1 = ko.observable(null);
            this.ClauseG1Amount = ko.observable(null);
            this.ClauseG1ErrorDescription = ko.observable(null);
            this.ClauseG1WarningDescription = ko.observable(null);
            this.ClauseG1Premium = ko.observable(null);
            this.ClauseG2 = ko.observable(null);
            this.ClauseG2Amount = ko.observable(null);
            this.ClauseG2ErrorDescription = ko.observable(null);
            this.ClauseG2WarningDescription = ko.observable(null);
            this.ClauseG2Premium = ko.observable(null);
            this.ClauseT1 = ko.observable(null);
            this.ClauseT1Amount = ko.observable(null);
            this.ClauseT1ErrorDescription = ko.observable(null);
            this.ClauseT1WarningDescription = ko.observable(null);
            this.ClauseT1Premium = ko.observable(null);
            this.ClauseT2 = ko.observable(null);
            this.ClauseT2Amount = ko.observable(null);
            this.ClauseT2ErrorDescription = ko.observable(null);
            this.ClauseT2Premium = ko.observable(null);
            this.ClauseSMO = ko.observable(null);
            this.ClauseSMOPremium = ko.observable(null);
            this.AdditionalClausesPremiumCurrency = ko.observable(null);
            this.AdditionalClausesMonthlyPremium = ko.observable(null);
            this.AdditionalClausesQuarterlyPremium = ko.observable(null);
            this.AdditionalClausesBiannualPremium = ko.observable(null);
            this.AdditionalClausesAnnualPremium = ko.observable(null);
            this.TotalPremiumCurrency = ko.observable(null);
            this.TotalMonthlyPremium = ko.observable(null);
            this.TotalQuarterlyPremium = ko.observable(null);
            this.TotalBiannualPremium = ko.observable(null);
            this.TotalAnnualPremium = ko.observable(null);
            this.ProfitCurrency = ko.observable(null);
            this.MonthlyProfit = ko.observable(null);
            this.QuarterlyProfit = ko.observable(null);
            this.BiannualProfit = ko.observable(null);
            this.AnnualProfit = ko.observable(null);
            this.CustomerName = ko.observable(null);
            this.CustomerNameErrorDescription = ko.observable(null);
            var properties = [
                this.AdditionalClausesAnnualPremium, this.AdditionalClausesBiannualPremium, this.AdditionalClausesMonthlyPremium, this.AdditionalClausesPremiumCurrency, this.AdditionalClausesQuarterlyPremium,
                this.Age, this.AgeErrorDescription, this.AnnualInterest, this.AnnualInterestErrorDescription, this.AnnualPremium, this.AnnualPremiumEnsureFund, this.AnnualPremiumErrorDescription, this.AnnualProfit,
                this.BiannualPremium, this.BiannualPremiumEnsureFund, this.BiannualPremiumErrorDescription, this.BiannualProfit, this.CalculationType, this.ClauseA, this.ClauseAAmount, this.ClauseAErrorDescription,
                this.ClauseAPremium, this.ClauseAWarningDescription, this.ClauseB, this.ClauseBAmount, this.ClauseBErrorDescription, this.ClauseBPremium, this.ClauseBWarningDescription, this.ClauseC1,
                this.ClauseC1Amount, this.ClauseC1ErrorDescription, this.ClauseC1Premium, this.ClauseC1WarningDescription, this.ClauseC2, this.ClauseC2Amount, this.ClauseC2ErrorDescription,
                this.ClauseC2Premium, this.ClauseC2WarningDescription, this.ClauseE, this.ClauseEErrorDescription, this.ClauseEPremium, this.ClauseEWarningDescription, this.ClauseG1, this.ClauseG1Amount,
                this.ClauseG1ErrorDescription, this.ClauseG1Premium, this.ClauseG1WarningDescription, this.ClauseG2, this.ClauseG2Amount, this.ClauseG2ErrorDescription, this.ClauseG2Premium,
                this.ClauseG2WarningDescription, this.ClauseK, this.ClauseKAmount, this.ClauseKErrorDescription, this.ClauseKPremium, this.ClauseSMO, this.ClauseSMOPremium, this.ClauseT1, this.ClauseT1Amount,
                this.ClauseT1ErrorDescription, this.ClauseT1Premium, this.ClauseT1WarningDescription, this.ClauseT2, this.ClauseT2Amount, this.ClauseT2ErrorDescription, this.ClauseT2Premium, this.Currency,
                this.CustomerName, this.CustomerNameErrorDescription, this.InsuranceAmount, this.InsuranceAmountErrorDescription, this.InsuranceTerm, this.InsuranceTermErrorDescription, this.MonthlyPremium,
                this.MonthlyPremiumEnsureFund, this.MonthlyPremiumErrorDescription, this.MonthlyProfit, this.ProfessionRiskErrorDescription, this.ProfitCurrency, this.QuarterlyPremium, this.QuarterlyPremiumEnsureFund,
                this.QuarterlyPremiumErrorDescription, this.QuarterlyProfit, this.TotalAnnualPremium, this.TotalBiannualPremium, this.TotalMonthlyPremium, this.TotalPremiumCurrency, this.TotalQuarterlyPremium,
            ];
            var that = this;
            properties.forEach(function (prop) {
                prop.subscribe(function (e) {
                    that.CalculateVM1Insurance();
                }, window, "");
            });
        }
        VM1ViewModel.prototype.CalculateVM1Insurance = function () {
            this.ClearVM1InsuranceData();
            return new Insurance_1.Insurance();
        };
        VM1ViewModel.prototype.ClearVM1InsuranceData = function () {
            console.log("change");
            this.InsuranceAmountErrorDescription(null);
            this.AnnualPremiumErrorDescription(null);
            this.BiannualPremiumErrorDescription(null);
            this.QuarterlyPremiumErrorDescription(null);
            this.MonthlyPremiumErrorDescription(null);
            this.AnnualPremiumEnsureFund(null);
            this.BiannualPremiumEnsureFund(null);
            this.QuarterlyPremiumEnsureFund(null);
            this.MonthlyPremiumEnsureFund(null);
            this.AgeErrorDescription(null);
            this.InsuranceTermErrorDescription(null);
            this.AnnualInterestErrorDescription(null);
            this.ProfessionRiskErrorDescription(null);
            this.ClauseAErrorDescription(null);
            this.ClauseAWarningDescription(null);
            this.ClauseAPremium(null);
            this.ClauseBErrorDescription(null);
            this.ClauseBWarningDescription(null);
            this.ClauseBPremium(null);
            this.ClauseC1ErrorDescription(null);
            this.ClauseC1WarningDescription(null);
            this.ClauseC1Premium(null);
            this.ClauseC2ErrorDescription(null);
            this.ClauseC2WarningDescription(null);
            this.ClauseC2Premium(null);
            this.ClauseKErrorDescription(null);
            this.ClauseKPremium(null);
            this.ClauseEErrorDescription(null);
            this.ClauseEWarningDescription(null);
            this.ClauseEPremium(null);
            this.ClauseG1ErrorDescription(null);
            this.ClauseG1WarningDescription(null);
            this.ClauseG1Premium(null);
            this.ClauseG2ErrorDescription(null);
            this.ClauseG2WarningDescription(null);
            this.ClauseG2Premium(null);
            this.ClauseT1ErrorDescription(null);
            this.ClauseT1WarningDescription(null);
            this.ClauseT1Premium(null);
            this.ClauseT2ErrorDescription(null);
            this.ClauseT2Premium(null);
            this.ClauseSMOPremium(null);
            this.AdditionalClausesPremiumCurrency(null);
            this.AdditionalClausesMonthlyPremium(null);
            this.AdditionalClausesQuarterlyPremium(null);
            this.AdditionalClausesBiannualPremium(null);
            this.AdditionalClausesAnnualPremium(null);
            this.TotalPremiumCurrency(null);
            this.TotalMonthlyPremium(null);
            this.TotalQuarterlyPremium(null);
            this.TotalBiannualPremium(null);
            this.TotalAnnualPremium(null);
            this.ProfitCurrency(null);
            this.MonthlyProfit(null);
            this.QuarterlyProfit(null);
            this.BiannualProfit(null);
            this.AnnualProfit(null);
            this.CustomerNameErrorDescription(null);
        };
        return VM1ViewModel;
    }());
    return VM1ViewModel;
});
