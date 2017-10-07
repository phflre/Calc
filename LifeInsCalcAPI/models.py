from django.db import models


class ClauseA(models.Model):
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionrisk = models.CharField(max_length=3, db_column='ProfessionRisk', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseA'

class ClauseB(models.Model):
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseB'


class ClauseC1(models.Model):
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionrisk = models.CharField(max_length=3, db_column='ProfessionRisk', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseC1'


class ClauseC2(models.Model):
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseC2'


class ClauseD(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseD'


class ClauseE(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseE'


class ClauseG1(models.Model):
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionrisk = models.CharField(max_length=3, db_column='ProfessionRisk', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseG1'


class ClauseG2(models.Model):
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionrisk = models.CharField(max_length=3, db_column='ProfessionRisk', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseG2'


class ClauseK(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseK'


class ClauseT1(models.Model):
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionrisk = models.CharField(max_length=3, db_column='ProfessionRisk', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseT1'


class ClauseT2(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ClauseT2'


class D1(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'D1'


class D1Profit(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualinterest = models.FloatField(db_column='AnnualInterest', blank=True, null=True)  # Field name made lowercase.
    annualprofit = models.FloatField(db_column='AnnualProfit', blank=True, null=True)  # Field name made lowercase.
    biannualprofit = models.FloatField(db_column='BiannualProfit', blank=True, null=True)  # Field name made lowercase.
    quarterlyprofit = models.FloatField(db_column='QuarterlyProfit', blank=True, null=True)  # Field name made lowercase.
    monthlyprofit = models.FloatField(db_column='MonthlyProfit', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'D1Profit'


class D1SurrenderValue(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    elapsedterm = models.PositiveSmallIntegerField(db_column='ElapsedTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    deferredsurrendervalue = models.SmallIntegerField(db_column='DeferredSurrenderValue', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'D1SurrenderValue'


class ProfessionRisk(models.Model):
    professionletter = models.CharField(max_length=1, db_column='ProfessionLetter', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionname = models.CharField(max_length=255, db_column='ProfessionName', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionrisk = models.CharField(max_length=3, db_column='ProfessionRisk', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    professionorder = models.SmallIntegerField(db_column='ProfessionOrder', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ProfessionRisk'


class S8(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'S8'


class S8Bonus5PlusSurrenderValue(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    elapsedterm = models.PositiveSmallIntegerField(db_column='ElapsedTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    deferredlivedsum = models.FloatField(db_column='DeferredLivedSum', blank=True, null=True)  # Field name made lowercase.
    deferredsurrendervalue = models.FloatField(db_column='DeferredSurrenderValue', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'S8Bonus5PlusSurrenderValue'


class S8DynamicaSurrenderValue(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    elapsedterm = models.PositiveSmallIntegerField(db_column='ElapsedTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    deferredlivedsum = models.FloatField(db_column='DeferredLivedSum', blank=True, null=True)  # Field name made lowercase.
    deferredsurrendervalue = models.FloatField(db_column='DeferredSurrenderValue', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'S8DynamicaSurrenderValue'


class S8Profit(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualinterest = models.FloatField(db_column='AnnualInterest', blank=True, null=True)  # Field name made lowercase.
    annualprofit = models.FloatField(db_column='AnnualProfit', blank=True, null=True)  # Field name made lowercase.
    biannualprofit = models.FloatField(db_column='BiannualProfit', blank=True, null=True)  # Field name made lowercase.
    quarterlyprofit = models.FloatField(db_column='QuarterlyProfit', blank=True, null=True)  # Field name made lowercase.
    monthlyprofit = models.FloatField(db_column='MonthlyProfit', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'S8Profit'


class VM1(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    age = models.PositiveSmallIntegerField(db_column='Age', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualpremium = models.FloatField(db_column='AnnualPremium', blank=True, null=True)  # Field name made lowercase.
    biannualpremium = models.FloatField(db_column='BiannualPremium', blank=True, null=True)  # Field name made lowercase.
    quarterlypremium = models.FloatField(db_column='QuarterlyPremium', blank=True, null=True)  # Field name made lowercase.
    monthlypremium = models.FloatField(db_column='MonthlyPremium', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'VM1'


class VM1Profit(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    annualinterest = models.FloatField(db_column='AnnualInterest', blank=True, null=True)  # Field name made lowercase.
    annualprofit = models.FloatField(db_column='AnnualProfit', blank=True, null=True)  # Field name made lowercase.
    biannualprofit = models.FloatField(db_column='BiannualProfit', blank=True, null=True)  # Field name made lowercase.
    quarterlyprofit = models.FloatField(db_column='QuarterlyProfit', blank=True, null=True)  # Field name made lowercase.
    monthlyprofit = models.FloatField(db_column='MonthlyProfit', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'VM1Profit'


class VM1SurrenderValue(models.Model):
    insuranceterm = models.PositiveSmallIntegerField(db_column='InsuranceTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    elapsedterm = models.PositiveSmallIntegerField(db_column='ElapsedTerm', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    deferredsurrendervalue = models.SmallIntegerField(db_column='DeferredSurrenderValue', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'VM1SurrenderValue'


