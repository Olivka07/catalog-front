import { Spacing } from 'shared/ui/Spacing';
import { Typography } from 'shared/ui/Typography/Typography';
import { PageWrapper } from 'widgets/layouts/ui/Page/Page';

export const Page = (): JSX.Element => {
    return (
        <PageWrapper>
            <Spacing size={20} />
            <Typography.h1 weightFont={500}>
                Магазин &#171;Стрельцы&#187;
            </Typography.h1>
            <Spacing size={20} />
            <article>
                <Typography.text weightFont={700} isInline>
                    Адрес:
                </Typography.text>{' '}
                <Typography.text isInline>
                    Самарская обл., Кошкинский р-н, ст. Погрузная, ул. Школьная,
                    10
                </Typography.text>
            </article>
        </PageWrapper>
    );
};
