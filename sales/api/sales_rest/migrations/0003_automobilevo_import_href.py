# Generated by Django 4.0.3 on 2022-12-07 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_sale_automobile'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(default='placeholder', max_length=200, unique=True),
            preserve_default=False,
        ),
    ]