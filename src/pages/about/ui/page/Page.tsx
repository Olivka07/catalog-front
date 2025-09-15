import { useUnit } from 'effector-react';
import { aboutPageModel } from 'pages/about/model';
import { useEffect } from 'react';
import { Card } from 'shared/ui';
import { Spacing } from 'shared/ui/Spacing';
import { Typography } from 'shared/ui/Typography/Typography';
import { PageWrapper } from 'widgets/layouts/ui/Page/Page';

export const Page = (): JSX.Element => {
    const triggerIsPageMounted = useUnit(aboutPageModel.isPageMountedTriggered);

    useEffect(() => {
        triggerIsPageMounted();
    }, []);

    return (
        <PageWrapper>
            <Spacing size={20} />
            <div>
                <Card mode="plain_with_bg">
                    <Card.Body>
                        <Card.Header align="center">
                            <Typography.h1 weightFont={500} fontAlign="center">
                                Магазин &#171;Стрельцы&#187;
                            </Typography.h1>
                        </Card.Header>
                        <Spacing size={20} />
                        <article>
                            <div>
                                <Typography.text weightFont={700} isInline>
                                    Адрес:
                                </Typography.text>{' '}
                                <Typography.text isInline>
                                    Самарская обл., Кошкинский р-н, ст.
                                    Погрузная, ул. Школьная, 10
                                </Typography.text>
                            </div>
                            <Spacing size={20} />
                            <div>
                                <Typography.text weightFont={700} isInline>
                                    График работы:
                                </Typography.text>{' '}
                                <Typography.text isInline>
                                    08:00-20:00
                                </Typography.text>
                            </div>
                        </article>
                    </Card.Body>
                </Card>
            </div>
        </PageWrapper>
    );
};
