# Generated by Django 3.2.10 on 2021-12-10 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Order', '0003_alter_order_firstname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='firstname',
            field=models.CharField(max_length=100),
        ),
    ]